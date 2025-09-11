const express = require("express");
const router = express.Router();
const setData = require("../controllers/setData");
const getAllData = require("../controllers/getAllData");
const getAllDocTypes = require("../controllers/getAllDocType");

router.post("/", setData);
router.get("/", getAllData);
router.get("/types", getAllDocTypes);

module.exports = router;
