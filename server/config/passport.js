var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = mongoose.model('User');

module.exports = function() {

    // Passport definition
    passport.use(new LocalStrategy({
            usernameField: 'email'
        },

        function(email, password, done) {
            console.log('email is :' + email);
            User.findOne({email: email}).exec(function(err, user) {
                if (user && user.authenticate(password)) {
                    console.log('find a user');
                    return done(null, user);
                } else {
                    console.log('cannot find a user');
                    return done(null, false);
                }
            });
        }
    ));

    // Serialize method
    passport.serializeUser(function(user, done) {
        if (user) {
            done(null, user._id);
        }
    });

    // Deserialize method
    passport.deserializeUser(function(id, done) {
        User.findOne({_id:id}).exec(function(err, user) {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
};
