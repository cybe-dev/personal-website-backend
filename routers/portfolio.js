const express = require("express");
const { query } = require("express-validator");
const { index } = require("../controllers/portfolio");
const router = express.Router();

router.get(
  "/",
  query("limit").optional().isInt(),
  query("offset").optional().isInt(),
  index
);

module.exports = router;
