var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required'
    },
    location: {
        type: {type: String},
        coordinates: [Number]
    }
});

var Location = mongoose.model('Location', locationSchema);
/*function createDefaultLocations() {
    Location.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT LOCATIONS ##################');

            var id = mongoose.Types.ObjectId('100000000000000000000000');
            Location.create({name: 'USA', parent: id}, function(err, country) {
                if (err) {
                    console.log('test log : ' + err);
                }
                Location.create({name: 'Alaska', parent: country._id}, function(err, state) {
                    Location.create({name: 'Anchorage', parent: state._id});
                    Location.create({name: 'Fairbanks', parent: state._id});
                    Location.create({name: 'Lakes', parent: state._id});
                    Location.create({name: 'Palmer', parent: state._id});
                });
                Location.create({name: 'California', parent: country._id}, function(err, state) {
                    Location.create({name: 'Adelanto', parent: state._id});
                    Location.create({name: 'Artesia', parent: state._id});
                    Location.create({name: 'Benicia', parent: state._id});
                    Location.create({name: 'Clovis', parent: state._id});
                    Location.create({name: 'Dublin', parent: state._id});
                });
                Location.create({name: 'New York', parent: country._id}, function(err, state) {
                    Location.create({name: 'Manhattan', parent: state._id});
                    Location.create({name: 'Bronx', parent: state._id});
                    Location.create({name: 'Brooklyn', parent: state._id});
                    Location.create({name: 'Queens', parent: state._id});
                    Location.create({name: 'Staten Island', parent: state._id});
                });
            });
            Location.create({name: 'Canada', parent: id}, function(err, country) {
                Location.create({name: 'New Brunswick', parent: country._id}, function(err, state) {
                    Location.create({name: 'Bathurst', parent: state._id});
                    Location.create({name: 'Campbellton', parent: state._id});
                    Location.create({name: 'Dieppe', parent: state._id});
                    Location.create({name: 'Edmundston', parent: state._id});
                    Location.create({name: 'Fredericton', parent: state._id});
                    Location.create({name: 'Miramichi', parent: state._id});
                    Location.create({name: 'Moncton', parent: state._id});
                });
                Location.create({name: 'Manitoba', parent: country._id}, function(err, state) {
                    Location.create({name: 'Brandon', parent: state._id});
                    Location.create({name: 'Dauphin', parent: state._id});
                    Location.create({name: 'Flin Flon', parent: state._id});
                    Location.create({name: 'Morden', parent: state._id});
                    Location.create({name: 'Portage la Prairie', parent: state._id});
                    Location.create({name: 'Selkirk', parent: state._id});
                    Location.create({name: 'Steinbach', parent: state._id});
                    Location.create({name: 'Thompson', parent: state._id});
                    Location.create({name: 'Winkler', parent: state._id});
                });
            });
            Location.create({name: 'India', parent: id}, function(err, country) {
                Location.create({name: 'Delhi', parent: country._id}, function(err, state) {
                    Location.create({name: 'South Delhi', parent: state._id});
                    Location.create({name: 'North Delhi', parent: state._id});
                    Location.create({name: 'East Delhi', parent: state._id});
                    Location.create({name: 'West Delhi', parent: state._id});
                    Location.create({name: 'Old Delhi', parent: state._id});
                    Location.create({name: 'New Delhi', parent: state._id});
                    Location.create({name: 'Yamuna Paar', parent: state._id});
                });
                Location.create({name: 'Bombay', parent: country._id}, function(err, state) {
                    Location.create({name: 'Chembur', parent: state._id});
                    Location.create({name: 'Borivali West', parent: state._id});
                    Location.create({name: 'Ghatkopar West', parent: state._id});
                    Location.create({name: 'Juhu', parent: state._id});
                    Location.create({name: 'Mira Road', parent: state._id});
                    Location.create({name: 'Powai', parent: state._id});
                    Location.create({name: 'Virar West', parent: state._id});
                });
                Location.create({name: 'Calcutta', parent: country._id}, function(err, state) {
                    Location.create({name: 'Rajarhat', parent: state._id});
                    Location.create({name: 'Park Street', parent: state._id});
                    Location.create({name: 'Golpark', parent: state._id});
                    Location.create({name: 'Chandan Nagar', parent: state._id});
                });
            });
        }
    });
}

exports.createDefaultLocations = createDefaultLocations;*/