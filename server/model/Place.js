var mongoose = require('mongoose');
require('mongoose-type-email');

var placeSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owner'
    },
    title: {
        type: String,
        required: '{PATH} is required!'
    },
    description: {
        type: String
    },
    telephone: {
        type: String
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: '{PATH} is required!',
        unique: true
    },
    website:{
        type: String
    },
    latitude: {
        type: String,
        required: '{PATH} is required'
    },
    longitude: {
        type: String,
        required: '{PATH} is required'
    },
    featured: {
        type: Boolean,
        required: '{PATH} is required!'
    },
    published: {
        type: Date,
        required: '{PATH} is required!'
    },
    tags: [String],
    categories: [mongoose.Schema.Types.ObjectId],
    images: [String],
    address: {
        state: {type: mongoose.Schema.Types.ObjectId},
        city: {type: mongoose.Schema.Types.ObjectId}
    }
});

var Place = mongoose.model('Place', placeSchema);
function createDefaultPlaces() {
    Place.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT PLACES ##################');
            Place.create(
                {
                    title: 'Place 1',
                    email: 'place1@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 2',
                    email: 'place2@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: false,
                    published: new Date('1/1/2014'),
                    tags: ['tag2']
                }
            );
            Place.create(
                {
                    title: 'Place 3',
                    email: 'place3@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 4',
                    email: 'place4@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1', 'tag2', 'tag3']
                }
            );
            Place.create(
                {
                    title: 'Place 5',
                    email: 'place5@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 6',
                    email: 'place6@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag3']
                }
            );
            Place.create(
                {
                    title: 'Place 7',
                    email: 'place7@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: false,
                    published: new Date('1/1/2014'),
                    tags: ['tag3']
                }
            );
            Place.create(
                {
                    title: 'Place 8',
                    email: 'place8@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag3']
                }
            );
            Place.create(
                {
                    title: 'Place 9',
                    email: 'place9@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: false,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 10',
                    email: 'place10@example.com',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 11',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 12',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
            Place.create(
                {
                    title: 'Place 13',
                    latitude: '37.579412513438385',
                    longitude: '-102.919921875',
                    featured: true,
                    published: new Date('1/1/2014'),
                    tags: ['tag1']
                }
            );
        }
    });
}

exports.createDefaultPlaces = createDefaultPlaces;
