const express = require("express");
const router = express.Router();
const setData = require("../controllers/setData");
const getAllData = require("../controllers/getAllData");

router.post("/", setData);
router.get("/", getAllData);

module.exports = router;
