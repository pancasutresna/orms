var User = require('mongoose').model('User');
var encrypt = require('../util/encryption');

exports.getUsers = function(req, res) {
    User.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.createUser = function(req, res, next) {
    var userData = req.body;
    // lower case registered email
    userData.email = userData.email.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.hashedPwd = encrypt.hashPwd(userData.salt, userData.password);

    User.create(userData, function(err, user) {
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate email!');
            }

            res.status(400);
            return res.send({reason:err.toString()});
        }

        // call passport login
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.send(user);
        });
    });
};

exports.updateUser = function(req, res) {
    var updatedUser = req.body;

    if (req.user._id !== updatedUser._id && !req.user.hasRole('admin')) {
        res.status(403);
        return res.send();
    }

    req.user.firstName = updatedUser.firstName;
    req.user.lastName = updatedUser.lastName;
    req.user.email = updatedUser.email;
    if (updatedUser.password && updatedUser.password.length > 0) {
        req.user.salt = encrypt.createSalt();
        req.user.hashedPwd = encrypt.hashPwd(req.user.salt, updatedUser.password);
    }

    req.user.save(function(err) {
        if (err) {
            res.status(400);
            return res.send({
                reason: err.toString()
            });
        }

        res.send(req.user);
    });

};
