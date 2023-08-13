const express = require("express");
const router = express.Router();
const predictionsController = require("../../../controllers/api/v1/predictionsController");

router.get("/", predictionsController.getPredictions);

module.exports = router;
