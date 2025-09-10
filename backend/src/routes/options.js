const express = require("express");
const router = express.Router();
const getOptions = require("../controllers/getOptions");
const setOptions = require("../controllers/setOptions");

router.get("/", getOptions);
router.post("/", setOptions);

module.exports = router;
