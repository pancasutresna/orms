var mongoose = require('mongoose');
var Location = require('mongoose').model('Location');

exports.getLocationsByParentId = function(req, res) {
    var parentId = req.params.parent_id;
    Location.find({ parent_id: parentId }).exec(function(err, collection) {
        console.log('locations: ' + collection);
        res.send(collection);
    });
};

exports.getLocationsByParentName = function(req, res) {
    var parentName = String(req.params.name);
    parentName = 'Manitoba'; //TODO: Change this
    Location.find({ name: parentName }, { _id: 1 }, function(err, docs) {
        var ids = docs.map(function(doc) {
            return doc._id;
        });

        Location.find({ parent: ids }, function(err, locations) {
            res.send(locations);
        });
    });
};

exports.getNearbyLocations = function(req, res) {
    var lat = Number(req.params.lat);
    var lng = Number(req.params.lng);
    var rad = Number(req.params.rad);
    var typeAdm2 = '2';

    Location.find({
        location: {
            $geoWithin: {
                $centerSphere: [
                    [lng, lat], rad / 3963.2 //TODO: Change this later
                ]
            }
        },
        type: typeAdm2
    }).exec(function(err, collection) {
        res.send(collection);
    });
};
