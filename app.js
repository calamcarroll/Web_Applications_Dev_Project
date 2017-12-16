var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var ClientPrograms = require("./routes/ClientPrograms");
var ClientUsers = require("./routes/ClientUsers");
var ClientDietPrograms = require("./routes/ClientDietPrograms");
var GymLocations = require("./routes/GymLocations");
var passport = require('passport')
var app = express();
var social = require('./passport/passport')(app,passport);





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);

// All location endpoints
app.get('/Location', GymLocations.getAllLocations);
app.get('/Location/:id',GymLocations.findOneLocation);
app.post('/Location',GymLocations.addGym);
app.delete('/Location/:id',GymLocations.deleteGym);
app.put('/Location/:id', GymLocations.updateGymInfo);

//All diet endpoints
app.get('/Diet',ClientDietPrograms.findAllDiets);
app.get('/Diet/:id', ClientDietPrograms.findOneDiet);
app.post('/Diet', ClientDietPrograms.addDiet);
app.delete('/Diet/:id', ClientDietPrograms.deleteDiet);
app.put('/Diet/:id', ClientDietPrograms.updateDietInfo);

//All users endpoints
app.get('/users',ClientUsers.getAllUsers );
app.post('/users', ClientUsers.findOneUser);
app.post('/users', ClientUsers.addUser);
app.delete('/users/:id', ClientUsers.deleteUser);
app.put('/users/:id', ClientUsers.updateUserInfo);

//All program endpoints
app.get('/programs', ClientPrograms.findAllPrograms);
app.get('/programs/:id', ClientPrograms.findOneProgram);
app.get('/programs/:id/:MuscleType', ClientPrograms.findByType);
app.get('/ExerciseName', ClientPrograms.fuzzySearch);
app.post('/programs', ClientPrograms.addProgram);
app.delete('/programs/:id', ClientPrograms.deleteProgram);
app.delete('/programs', ClientPrograms.clearAllPrograms);
app.put('/programs/:id/Weight', ClientPrograms.incrementWeight);
app.put('/programs/:id', ClientPrograms.updateProgram);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
