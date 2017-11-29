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

router.addGym = function (req, res) {

    var location = new Location();
    location.gymName = req.body.gymName;
    location.MonthlyPrice = req.body.MonthlyPrice;
    location.HalfYearPrice = req.body.HalfYearPrice;
    location.FullYearPrice = req.body.FullYearPrice;
    location.Longitude = req.body.Longitude;
    location.Latitude = req.body.Latitude;


    location.save(function (err) {
        if (err)
            res.send(err);
        else

            res.json({message: 'Gym Added!', data: location});
    });
};

router.deleteGym = function (req, res) {
    Location.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
            res.status(404);
            res.json({message: 'Gym not deleted'});
        } else
            res.json({message: 'Gym Deleted!'});
    });
};

router.updateGymInfo = function (req, res) {

    Location.findById(req.params.id, function (err, location) {
        if (err)
            res.send(err);
        else {
            location.gymName = req.body.gymName;
            location.MonthlyPrice = req.body.MonthlyPrice;
            location.HalfYearPrice = req.body.HalfYearPrice;
            location.FullYearPrice = req.body.FullYearPrice;
            location.Longitude = req.body.Longitude;
            location.Latitude = req.body.Latitude;
            location.save(function (err) {
                if (err) {
                    res.status(404);
                    res.json({message: 'Invalid Id!'});
                }
                else
                    res.json({message: 'Gym has been updated', data: location});
            });
        }
    });

}

module.exports = router;