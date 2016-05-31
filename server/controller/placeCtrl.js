var Place = require('mongoose').model('Place');
var fs = require('fs');
// Google Cloud SDK for NodeJS
var gcloud = require('gcloud');

/*
 * Google cloud storage configuration
 */
var gcs = gcloud.storage({
    projectId: 'utility-glider-130309',
    keyFilename: './server/config/disini-6b3b2077c500.json'
});
var bucket = gcs.bucket('disini-upload');

exports.getPlaces = function(req, res) {
    Place
    .find({})
    .populate('address.city', 'name')
    .populate('address.state', 'name')
    .populate('owner', 'firstName lastName')
    .populate('categories', 'label')
    .exec(function(err, collection) {
        console.log('error : ' + err);

        console.log('places: ' + collection);

        res.send(collection);
    });
};

exports.getPlaceById = function(req, res) {
    Place
    .findOne({_id:req.params.id})
    .exec(function(err, place) {
        console.log('places: ' + place);
        res.send(place);
    });
};

exports.addNewPlace = function(req, res, next) {
    var placeData = req.body;

    if (req.user === undefined) {
        res.status(403);
        return res.send({reason: '403 Forbidden'});
    }

    placeData.owner = req.user._id;
    placeData.featured = false;
    placeData.published = new Date();
    placeData.tags = ['tag1']; // TODO: change this later

    Place.create(placeData, function(err, place) {
        if (err) {
            res.status(400);
            return res.send({reason:err.toString()});
        }
        res.send(place);
    });
};

exports.uploadFile = function(req, res, next) {
    var uploadedFile = req.files[0];
    bucket.upload(uploadedFile.path, function(err, file) {
        if (!err) {
            console.log(uploadedFile.originalname + ' is uploaded');
        }
    });

    console.log('file path : ' + uploadedFile.path);
    console.log('file type : ' + uploadedFile.mimetype);
    res.send(uploadedFile);
};
