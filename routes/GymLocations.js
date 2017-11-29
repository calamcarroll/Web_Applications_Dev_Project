var Location = require('../models/Location');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;


// Database connection code
mongoose.connect('mongodb://localhost:27017/gymLocationsdb', {useMongoClient: true});


db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('Connected to LocationsDB ');
});
router.getAllLocations = function (req, res) {

    Location.find(function (err, loc) {

        if (err)
            res.json({message: 'User NOT Found!', errmsg: err});
        else

            res.json(loc);

    });
};

router.findOneLocation = function (req, res) {

    Location.find({"_id": req.params.id}, function (err, loc) {
        if (err)
            res.json({message: 'User NOT Found!', errmsg: err});
        else
            res.json(loc);

    });
}
module.exports = router;