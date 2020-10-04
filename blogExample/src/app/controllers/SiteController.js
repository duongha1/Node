const Course = require("../models/Course");

class SiteController {
  //[GET] /
  index(req, res) {
    //get data from model
    //we can find documents from the same collection with callback
    Course.find({}, function (err, courses) {
      //if no error, response courses in database
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "ERROR!!!" }); //error
      }
    });
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
