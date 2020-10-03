const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;

const route = require("./routes");

//use static file
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
app.set("views", path.join(__dirname, "resources/views"));

//Action ----> Dispatcher ---->Function Handler

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
