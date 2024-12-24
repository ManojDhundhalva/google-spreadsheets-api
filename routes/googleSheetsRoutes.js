const express = require("express");
const googleSheetsController = require("../controllers/googleSheetsController");

const router = express.Router();

router.post("/store-data", googleSheetsController.storeData);

module.exports = router;
