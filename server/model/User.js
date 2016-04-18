var mongoose = require('mongoose');
var encrypt = require('../util/encryption');

require('mongoose-type-email');

// Schema for basic user
var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    email: {
        type: mongoose.SchemaTypes.Email,
        required: '{PATH} is required!',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required!'},
    hashedPwd: {type: String, required: '{PATH} is required!'},
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('User', userSchema);
function createDefaultUsers() {
    User.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'panca');
            User.create(
                {
                    firstName: 'Panca',
                    lastName: 'Sutresna',
                    email: 'panca',
                    salt: salt,
                    hashedPwd: hash,
                    roles: ['admin']
                }
            );

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'panca');
            User.create(
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john',
                    salt: salt,
                    hashedPwd: hash, roles: []
                }
            );

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'panca');
            User.create(
                {
                    firstName: 'Jane',
                    lastName: 'Doe',
                    email: 'jane',
                    salt: salt,
                    hashedPwd: hash
                }
            );
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;
