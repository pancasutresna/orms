var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required'
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId
    }
});

var Location = mongoose.model('Location', locationSchema);
function createDefaultLocation() {
    Location.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT LOCATIONS ##################');
            
            var parentId = 0;
            Location.create({ name: 'USA', parent: 0}, function(err, country) {
                Location.create({ name: 'Alaska', parent: country._id}, function(err, state) {
                    Location.create({ name: 'Anchorage', parent: state._id});
                    Location.create({ name: 'Fairbanks', parent: state._id});
                    Location.create({ name: 'Lakes', parent: state._id});
                    Location.create({ name: 'Palmer', parent: state._id});
                };
                Location.create({ name: 'California', parent: country._id}, function(err, state) {
                    Location.create({ name: 'Adelanto', parent: state._id});
                    Location.create({ name: 'Artesia', parent: state._id});
                    Location.create({ name: 'Benicia', parent: state._id});
                    Location.create({ name: 'Clovis', parent: state._id});
                    Location.create({ name: 'Dublin', parent: state._id});
                });
                Location.create({ name: 'New York', parent: country._id}, function(err, state){
                    Location.create({ name: 'Manhattan', parent: state._id});
                    Location.create({ name: 'Bronx', parent: state._id});
                    Location.create({ name: 'Brooklyn', parent: state._id});
                    Location.create({ name: 'Queens', parent: state._id});
                    Location.create({ name: 'Staten Island', parent: state._id});
                });
            });
            Location.create({ name: 'Canada', parent: 0});
            Location.create({ name: 'India', parent: 0});
        }
    };
}