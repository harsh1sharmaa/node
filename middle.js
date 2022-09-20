const { MongoErrorLabel } = require("mongodb");

module.exports= reqFilter = (req, res, next) => {
    console.log("hello world!");
    console.log(req.query.barrer);
    if (req.query.barrer == "admin") {
      next();
    } else {
      res.render("invalid");
    }
  };

