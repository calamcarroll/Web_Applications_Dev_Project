var mongoose = require('mongoose');

var DietSchema = new mongoose.Schema({
    Protein: Number,
    Fats: Number,
    Carbs: Number,
    numMeals: Number,
    MealType: String,
    MealCalories: Number,
    MealTime: Number
});

module.exports = mongoose.model('Diet', DietSchema);