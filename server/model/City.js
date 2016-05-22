var mongoose = require('mongoose');

var cityScheme = mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: {type: String},
        coordinates: [Number]
    }
});

var Cities = mongoose.model('City', cityScheme);