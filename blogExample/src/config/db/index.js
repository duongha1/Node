const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/dh_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect Successfully!");
  } catch (error) {
    console.log("FAIL!!!");
  }
}
module.exports = { connect };
