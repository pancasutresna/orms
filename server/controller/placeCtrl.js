var Place = require('mongoose').model('Place');
var fs = require('fs');
var gcloud = require('gcloud'); // Google Cloud SDK for NodeJS

var gcs = gcloud.storage({
    projectId: 'utility-glider-130309',
    keyFilename: './server/config/disini-6b3b2077c500.json'
});

var bucket = gcs.bucket('disini-upload');

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

    placeData.ownerId = req.user._id; // get ownerId from session
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

exports.uploadFile = function(req, res, next) {
    var uploadedFile = req.files[0];
    // bucket.upload(uploadedFile.path, function(err, file) {
    //     if (!err) {
    //         console.log(uploadedFile.originalname + ' is uploaded');
    //     }
    // });

    console.log('file path : ' + uploadedFile.path);
    console.log('file type : ' + uploadedFile.mimetype);
};
