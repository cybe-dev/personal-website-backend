const express = require("express");
const { index } = require("../controllers/skill");
const router = express.Router();

router.get("/", index);

module.exports = router;
