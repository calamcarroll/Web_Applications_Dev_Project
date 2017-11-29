var mongoose = require('mongoose');

var DietSchema = new mongoose.Schema({
    Protein: Number,
    Fats: Number,
    Carbs: Number,
    numMeals: Number,
    Meals: [{
        Type: String,
        Calories: Number,
        MealTime: Number
    }]
});

module.exports = mongoose.model('Diet', DietSchema);