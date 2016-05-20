var mongoose = require('mongoose');
var Location = require('mongoose').model('Location');

exports.getLocationsByParentId = function(req, res) {
    var parentId = mongoose.Types.ObjectId(req.params.parentId);
    console.log('Parent ID : ' + parentId);
    Location.find({parent: parentId}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getLocationsByParentName = function(req, res) {
    var parentName = String(req.params.name);
    parentName = 'Manitoba'; //TODO: Change this
    Location.find({name: parentName}, {_id:1}, function(err, docs) {
        var ids = docs.map(function(doc) {
            return doc._id;
        });

        Location.find({parent: ids}, function(err, locations) {
            res.send(locations);
            console.log('location: ' + locations);
        });
    });
};
