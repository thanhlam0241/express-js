const { get } = require("../../routes/news");
const Course = require("../models/Course");
class SiteController {
  //  GET/
  index(req, res) {
    // res.render("home");
    // res.json({
    //   name: "Test",
    // });

    Course.find({}, (err, courses) => {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "ERROR!!!" });
      }
    });
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();

// const newsController = require("/SiteController");
