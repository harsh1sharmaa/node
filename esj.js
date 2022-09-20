const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

const reqFilter = (req, res, next) => {
  console.log("hello world!");
  console.log(req.query.barrer);
  if (req.query.barrer == "admin") {
    next();
  } else {
    res.render("invalid");
  }
};
app.use(reqFilter);

const publicpath = path.join(__dirname);

app.get("/", (req, res) => {
  data = {
    name: "harsh",
    email: "harsh@gmail.com",
  };
  res.render("profile", { data });
});
app.listen(2000);
