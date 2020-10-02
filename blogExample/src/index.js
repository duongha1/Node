const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;

//
app.use(express.static(path.join(__dirname, "public")));

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); //form
app.use(express.json()); //js

//template logger
//app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs", //set the config
  })
);
app.set("view engine", "hbs"); //default
app.set("views", path.join(__dirname, "resource/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
