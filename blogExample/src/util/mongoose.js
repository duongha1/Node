const { Mongoose } = require("mongoose");

//this will get data from database and map to liberal object so that 
//controllers can use it
module.exports = {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject : mongoose;
    }
};