var mongoose = require('mongoose');
var Location = require('mongoose').model('Location');

exports.getLocationsByParentId = function(req, res) {
    var parentId = mongoose.Types.ObjectId(req.params.parentId);
    Location.find({parent: parentId}).exec(function(err, collection) {
        res.send(collection);
    });
};
