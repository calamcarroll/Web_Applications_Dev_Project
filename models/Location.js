var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    GymName: String ,
    MonthlyPrice: Number,
    HalfYearPrice: Number,
    FullYearPrice: Number,
    Longitude: Number,
    Latitude: Number
});

module.exports = mongoose.model('Location', LocationSchema);