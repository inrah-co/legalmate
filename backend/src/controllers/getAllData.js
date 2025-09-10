const Data = require('../models/data');

const getAllData = async (req, res) => {
    try {
        const dataEntries = await Data.find({});
        res.status(200).json(dataEntries);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data entries', error });
    }
};

module.exports = getAllData;