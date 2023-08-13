const express = require("express");

const router = express.Router();

router.use("/metrics", require("./metrics"));
router.use("/predictions", require("./predictions"));

module.exports = router;
