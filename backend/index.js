const express = require("express");
const app = express();
const port = 8000;
// const db = require("./config/mongoose");
// const passport = require("passport");
// const passportJwt = require("./config/passport_jwt_strategy");

app.use(express.urlencoded());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
