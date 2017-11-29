var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    GymName: String ,
    Membership:[{
        Monthly: Number,
        HalfYear: Number,
        FullYear: Number
    }],
    Locations: [{
        Longitude: Number,
        Latitude: Number
    }]
});

module.exports = mongoose.model('Location', LocationSchema);