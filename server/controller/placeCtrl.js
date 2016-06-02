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

    var page = Number(req.params.page);
    var pageLimit = Number(req.params.limit);

    var query = {};
    var options = {
        populate: 'address.city address.state owner categories',
        page: page,
        limit: pageLimit
    };

    Place.paginate(query, options).then(function(result) {
        res.send(result);
    });

    // Place
    // .find({})
    // .populate('address.city', 'name')
    // .populate('address.state', 'name')
    // .populate('owner', 'firstName lastName')
    // .populate('categories', 'label')
    // .exec(function(err, collection) {
    //     console.log('error : ' + err);

    //     console.log('places: ' + collection);

    //     res.send(collection);
    // });
};

exports.getPlaceById = function(req, res) {
    Place
    .findOne({_id:req.params.id})
    .populate('address.city', 'name')
    .populate('address.state', 'name')
    .populate('owner', 'firstName lastName')
    .populate('categories', 'label')
    .exec(function(err, place) {
        res.send(place);
    });
};

exports.getPlaceByCategory = function(req, res) {
    Place
    .find({categories: {$elemMatch:{$eq: req.params.id}}})
    .populate('address.city')
    .populate('address.state')
    .populate('owner')
    .populate('categories')
    .exec(function(err, collection) {
        res.send(collection);
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
