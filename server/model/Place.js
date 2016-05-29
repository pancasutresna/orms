var mongoose = require('mongoose');
require('mongoose-type-email');

var placeSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: '{PATH} is required!'
    },
    telephone: {
        type: String
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: '{PATH} is required!',
        unique: true
    },
    website: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        alamat1: { type: String },
        alamat2: { type: String },
        kodePos: { type: String },
        state: { type: String },
        city: { type: String }
    },
    location: {
        type: { type: String },
        coordinates: [Number],
    },
    operationalHour: {
        senin: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        selasa: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        rabu: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        kamis: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        jumat: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        sabtu: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        },
        minggu: {
            open: { type: Boolean },
            openingHour: { type: Date },
            closingHour: { type: Date }
        }
    },
    images: [String],
    categories: [mongoose.Schema.Types.ObjectId],
    featured: { type: Boolean },
    published: { type: Date },
    tags: [String],
});

var Place = mongoose.model('Place', placeSchema);

function createDefaultPlaces() {
    Place.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT PLACES ##################');
            Place.create({
                title: 'Place 1',
                email: 'place1@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 2',
                email: 'place2@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: false,
                published: new Date('1/1/2014'),
                tags: ['tag2']
            });
            Place.create({
                title: 'Place 3',
                email: 'place3@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 4',
                email: 'place4@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1', 'tag2', 'tag3']
            });
            Place.create({
                title: 'Place 5',
                email: 'place5@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 6',
                email: 'place6@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag3']
            });
            Place.create({
                title: 'Place 7',
                email: 'place7@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: false,
                published: new Date('1/1/2014'),
                tags: ['tag3']
            });
            Place.create({
                title: 'Place 8',
                email: 'place8@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag3']
            });
            Place.create({
                title: 'Place 9',
                email: 'place9@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: false,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 10',
                email: 'place10@example.com',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 11',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 12',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
            Place.create({
                title: 'Place 13',
                latitude: '37.579412513438385',
                longitude: '-102.919921875',
                featured: true,
                published: new Date('1/1/2014'),
                tags: ['tag1']
            });
        }
    });
}

exports.createDefaultPlaces = createDefaultPlaces;
