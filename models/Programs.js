var mongoose = require('mongoose');

var FitnessProgramSchema = new mongoose.Schema({
    MuscleType: String,
    ExerciseName: String,
    Sets: Number,
    Reps: Number,
    RestTime: Number,
    Weight: Number,
    UserName: String

});
module.exports = mongoose.model('Program', FitnessProgramSchema);