const express = require("express");
const router = express.Router();
const askAI = require("../controllers/askAI");

router.post("/", askAI);

module.exports = router;
