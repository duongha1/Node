const Course = require("../models/Course");
const {multipleMongooseToObject} = require("../../util/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) { //next is middleware to handle err
    //get data from model
    //we can find documents from the same collection
    //Promise
    Course.find({})
      .then((courses) => {
        res.render('home',{
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);

    //Callback
    /*
    Course.find({}, function (err, courses) {
      //if no error, response courses in database
      if (!err) {
        res.json(courses);
      } else {
        next(err);
      }
    });
    */
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
