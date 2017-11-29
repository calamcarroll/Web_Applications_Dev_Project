var Diet = require('../models/Diet');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;



// Database connection code
mongoose.connect('mongodb://localhost:27017/dietProgramsdb', { useMongoClient: true });

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function (){
    console.log('Connected to dietPrograms database');
});

router.findAllDiets = function(req, res){
    Diet.find(function(err,Diet) {
        if (err)
            res.send(err);

        res.json(Diet);
    });
};


router.findOneDiet = function (req, res) {

    Diet.find({"_id": req.params.id}, function (err, Diets) {
        if (err)
            res.json({message: 'Diet NOT Found!', errmsg: err});
        else
            res.json(Diets);

    });
};

router.addDiet = function (req, res) {

    var diet = new Diet();
    diet.Protien = req.body.Protien;
    diet.Fats = req.body.Fats;
    diet.Carbs = req.body.Carbs;
    diet.numMeals = req.body.numMeals;
    diet.MealType = req.body.MealType;
    diet.MealCalories = req.body.MealCalories;
    diet.MealTime = req.body.MealTime;

    diet.save(function (err) {
        if (err)
            res.send(err);
        else

            res.json({message: 'Diet Added!', data: diet});
    });
};

router.deleteDiet = function (req, res) {
    Diet.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
            res.status(404);
            res.json({message: 'Diet not deleted'});
        } else
            res.json({message: 'Diet Deleted!'});
    });
};

router.updateDietInfo = function (req, res) {

    Diet.findById(req.params.id, function (err, diet) {
        if (err)
            res.send(err);
        else {
            diet.Protien = req.body.Protien;
            diet.Fats = req.body.Fats;
            diet.Carbs = req.body.Carbs;
            diet.numMeals = req.body.numMeals;
            diet.MealType = req.body.MealType;
            diet.MealCalories = req.body.MealCalories;
            diet.MealTime = req.body.MealTime;

            diet.save(function (err) {
                if (err) {
                    res.status(404);
                    res.json({message: 'Invalid diet Id!'});
                }
                else
                    res.json({message: 'Diet has been updated', data: diet});
            });
        }
    });

}





module.exports = router;