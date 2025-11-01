const express = require("express");

const app = express();

app.get("/signup", (req, res) => {
  console.log("signup is running");
  res.json({
    msg: "SIGN UP end point ",
  });
});

app.get("/signin", (req, res) => {
  res.json({
    msg: "SIGN IN end point ",
  });
});

app.listen(3000, () => {
  console.log("this is runnning ");
});
