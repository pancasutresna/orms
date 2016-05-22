var City = require('mongoose').model('City');

exports.getNearbyLocations = function(req, res) {
    City.find({
        location: {
            $geoWithin: { $centerSphere: [
                    [115.1955223078221, -8.71519553321213], 5 / 3963.2 //TODO: Change this later
                ] }
        },
        
    }).exec(function(err, collection) {
        console.log('SEARCHING NEARBY CITY ###################### ' + collection);
        res.send(collection);
    });
};
