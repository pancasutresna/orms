var Place = require('mongoose').model('Place');

exports.getPlaces = function(req, res) {
    Place.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getPlaceById = function(req, res) {
    Place.findOne({_id:req.params.id}).exec(function(err, place) {
        res.send(place);
    });
};

exports.addNewPlace = function(req, res, next) {
    var placeData = req.body;

    if (req.user === undefined) {
        res.status(403);
        return res.send({reason: '403 Forbidden'});
    }

    // TODO: Add owner
    placeData.featured = false;
    placeData.published = new Date('1/1/2016'); //TODO: Change this later
    placeData.tags = ['tag1'];

    Place.create(placeData, function(err, place) {
        if (err) {
            res.status(400);
            return res.send({reason:err.toString()});
        }

        res.send(place);
    });
};
