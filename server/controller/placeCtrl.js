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

    placeData.featured = false;
    placeData.published = new Date('1/1/2016'); //TODO: Change this later
    placeData.tags = ['tag1'];

    Place.create(placeData, function(err, place) {
        if (err) {
            res.status(400);
            return res.send({reason:err.toString()});
        }

        console.log('place: ' + place);
        res.send(place);
    });
}

