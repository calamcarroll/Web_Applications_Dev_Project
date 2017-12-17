var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/Users');
var session = require('express-session');
module .exports = function (app, passport) {


    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
            clientID: '131855420824900',
            clientSecret: 'f1434d0a9ddfe56ae215da1d9e09b472',
            callbackURL: "http://localhost:3000/auth/facebook/callback",
            profileFields:['id','displayName', 'photos', 'email']
        },
        function(accessToken, refreshToken, profile, done) {
        console.log(profile)
          //todo finished off here
            // User.findOne({Email: profile._json.email}).select('Username, Password, Email').exec(function (err, user) {
            //    if(err) done(err);
            //     if(user && user != null){
            //         done(null, user);
            //     }else
            //         done(err);
            // });
            done(null,profile)
        }
    ));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect: '/login' }));


    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' })
    );

    return passport;
}

