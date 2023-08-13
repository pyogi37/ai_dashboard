const express = require("express");
const router = express.Router();
const metricsController = require("../../../controllers/api/v1/metricsController");

router.get("/", metricsController.getMetrics);

module.exports = router;
