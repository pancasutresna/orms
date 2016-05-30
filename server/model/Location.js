var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: '{PATH} is required'
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    }
});

var Location = mongoose.model('Location', locationSchema);

function createDefaultLocations() {
    Location.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT LOCATIONS ##################');

            var rootParentId = mongoose.Types.ObjectId('000000000000000000000000');
            Location.create({
                _id: mongoose.Types.ObjectId('000000000000000000000001'),
                parent_id: rootParentId,
                name: 'Indonesia',
                type: 0,
                location: {
                    type: 'Point',
                    coordinates: []
                },
                status: 1,
                timezone: ''
            }, function(err, country) {

                // Provinsi Aceh
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Aceh',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [96.7493993, 4.695135]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Simeulue',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [96.083333, 2.583333]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Singkil',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [97.87216, 2.3589459]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Tenggara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.6982272,
                                3.3088666
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.3516558,
                                3.3115056
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.9885456,
                                5.255443
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                96.8350999,
                                4.4482641
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Besar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.4777811,
                                5.4529168
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pidie',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.940971,
                                5.0742659
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bireuen',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                96.89005,
                                5.18254
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                96.1526985,
                                4.4542745
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Barat Daya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.3368031,
                                3.0512643
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.2221421,
                                4.9786331
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Gayo Lues',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.3516558,
                                3.955165
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nagan Raya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                96.4929797,
                                4.1248406
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Tamiang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.0028892,
                                4.2328871
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Aceh Jaya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.6457951,
                                4.7873684
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bener Meriah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.0068393,
                                4.7748348
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pidie Jaya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                96.195132,
                                5.1548063
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Banda Aceh',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.3166667,
                                5.55
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sabang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                95.3192982,
                                5.8946929
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Langsa',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.9633333,
                                4.48
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Subulussalam',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.0165205,
                                2.6449927
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Lhokseumawe',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.1402778,
                                5.1880556
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Sumatera Utara
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Sumatera Utara',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            99.5450974,
                            2.1153547
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nias',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.7111274, -8.1712591
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tapanuli Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.2785583,
                                1.5774933
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Mandailing Natal',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.3673084,
                                0.7432372
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tapanuli Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.704075,
                                1.8493299
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tapanuli Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.1013498,
                                2.0405246
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Toba Samosir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.2785583,
                                2.3502398
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Labuhanbatu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.1703257,
                                2.3439863
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Asahan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.634135,
                                2.8174722
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Simalungun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.2785583,
                                2.9781612
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Karo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.265058,
                                3.1052909
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Dairi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.265058,
                                2.8675801
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Deli Serdang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.704075,
                                3.4201802
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Langkat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.3088441,
                                3.8653916
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Humbang Hasundutan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.5721016,
                                2.1988508
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nias Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.8286368,
                                0.7086091
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Samosir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.8166667,
                                2.5833333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pakpak Bharat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.299838,
                                2.545786
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Serdang Bedagai',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.0571089,
                                3.3371694
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Batu Bara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.5006143,
                                3.1740979
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Padang Lawas Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.634135,
                                1.5758644
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Padang Lawas',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.8124935,
                                1.1186977
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sibolga',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.7827988,
                                1.7403745
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tanjung Balai',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.800331,
                                2.965122
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pematang Siantar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.06,
                                2.96
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Medan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.6755979,
                                3.585242
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Binjai',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.482246,
                                3.594462
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Padangsidimpuan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.273972,
                                1.380424
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tebing Tinggi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.2009815,
                                3.3856205
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Labuhanbatu Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.8124935,
                                2.3465638
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Labuhanbatu Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.1703257,
                                1.8799353
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nias Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.5247243,
                                1.1255279
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nias Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.5247243,
                                1.1255279
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Gunungsitoli',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                97.61594,
                                1.281964
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Sumatera Barat
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Sumatera Barat',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            100.8000051, -0.7399397
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kepulauan Mentawai',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                98.9245343, -1.426001
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pesisir Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.8903099, -1.7223147
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Solok',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.644402, -0.803027
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sijunjung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.997658, -0.6881586
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanah Datar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.5746224, -0.4797043
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Padang Pariaman',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.2151578, -0.5546757
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Agam',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.1703257, -0.2209392
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lima Puluh Kota',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.4187929,
                                3.168216
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pasaman',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.7901781,
                                0.1288752
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Solok Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.2523792, -1.4157329
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Dharmas Raya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.6157773, -1.1120568
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pasaman Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                99.634135,
                                0.2213005
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Padang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.3530556, -0.95
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Solok',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.644402, -0.803027
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sawah Lunto',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.7763604, -0.6810286
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Padang Panjang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.4059456, -0.470679
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bukittinggi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.3691667, -0.3055556
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Payakumbuh',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.632301, -0.22887
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pariaman',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.1179574, -0.6264389
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Riau
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Riau',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            101.7068294,
                            0.2933469
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kuantan Singingi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.5248055, -0.4411596
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Indragiri Hulu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.2547919, -0.7361181
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Indragiri Hilir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.989615, -0.1456733
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pelalawan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.088699,
                                0.441415
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten S I A K',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.921327, -0.789275
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kampar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.1617356,
                                0.146671
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Rokan Hulu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.439656,
                                1.0410934
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bengkalis',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.0797222,
                                1.4897222
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Rokan Hilir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                100.8000051,
                                1.6463978
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pekanbaru',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.45,
                                0.5333333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Dumai',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.447601,
                                1.665742
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kepulauan Meranti',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.6675575,
                                0.9208765
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Jambi
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Jambi',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            102.4380581, -1.4851831
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bungo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.8891721, -1.6401338
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Batanghari',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.0817903, -1.7083922
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kerinci',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.4339148, -1.8720467
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Merangin',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.9804613, -2.1752789
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Muaro Jambi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.615799, -1.596672
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sarolangun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.6905326, -2.2654937
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanjung Jabung Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.7984428, -1.2332122
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanjung Jabung Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.89973, -1.3291599
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tebo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.3463875, -1.2592999
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jambi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.615799, -1.596672
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sungai Penuh',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.387199, -2.06314
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Merangin',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.9804613, -2.1752789
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kerinci',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.264, -1.697
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sarolangun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.6905326, -2.2654937
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Batang Hari',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.0817903, -1.7083922
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Muaro Jambi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.615799, -1.596672
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanjung Jabung Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.89973, -1.3291599
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanjung Jabung Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.7984428, -1.2332122
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bungo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.8891721, -1.6401338
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tebo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.3463875, -1.2592999
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jambi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.615799, -1.596672
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sungai Penuh',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.387199, -2.06314
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Sumatera Selatan
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Sumatera Selatan',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            103.914399, -3.3194374
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ogan Komering Ulu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.0072348, -4.0283486
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ogan Komering Ilir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.2194808, -3.4559744
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Muara Enim',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.770798, -3.651581
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lahat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.5427778, -3.7863889
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Musi Rawas',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.989615, -2.8625305
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Musi Banyuasin',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.7289167, -2.5442029
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Banyu Asin',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.7520939, -2.6095639
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ogan Komering Ulu Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.0072348, -4.6681951
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ogan Komering Ulu Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.7520939, -3.8567934
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ogan Ilir',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.6121475, -3.426544
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Empat Lawang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.8975098, -3.7286029
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Palembang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.7567333, -2.9911083
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Prabumulih',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.235397, -3.440956
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pagar Alam',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.265297, -4.03767
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Lubuklinggau',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.8616667, -3.2966667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Bengkulu
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Bengkulu',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            102.3463875, -3.5778471
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bengkulu Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.035694, -4.3248409
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Rejang Lebong',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.6675575, -3.4548154
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bengkulu Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.1632718, -3.4219555
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kaur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.4511768, -4.6792278
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Seluma',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.5642261, -4.0622929
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Mukomuko',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                101.1169805, -2.5760003
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lebong',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.382202, -2.992617
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kepahiang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.578201, -3.651431
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bengkulu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.2591667, -3.7955556
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bengkulu Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                102.2591667, -3.7955556
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Lampung
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Lampung',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            105.4068079, -4.5585849
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lampung Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.1930918, -5.1490396
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tanggamus',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.5655273, -5.3027489
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lampung Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.5474373, -5.5622614
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lampung Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.6881788, -5.1134995
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lampung Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.3131185, -4.8008086
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lampung Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.7520939, -4.8133905
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tulangbawang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.5005483, -4.3176576
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Way Kanan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.5655273, -4.4963689
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pesawaran',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.0791228, -5.493245
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bandar Lampung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.2666667, -5.45
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Metro',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.3, -5.1166667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tulangbawang Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.0791228, -4.5256967
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pringsewu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.9622498, -5.3539884
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Mesuji',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.3131185, -4.0044783
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Kepulauan Bangka Belitung
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Kepulauan Bangka Belitung',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            106.4405872, -2.7410513
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangka',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.0640179, -2.2884782
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Belitung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.9531836, -2.8708938
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangka Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.0640179, -2.2884782
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangka Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.0640179, -2.2884782
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangka Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.0640179, -2.2884782
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Belitung Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.9531836, -2.8708938
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pangkal Pinang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.109596, -2.129323
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Kepulauan Riau
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Kepulauan Riau',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            108.1428669,
                            3.9456514
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bintan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.5189214,
                                1.0619173
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Karimun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                103.3666667,
                                1.05
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Natuna',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.1812242,
                                3.9329945
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lingga',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.6354631, -0.1627686
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Batam',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.0304535,
                                1.0456264
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tanjung Pinang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.446464,
                                0.9179205
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lingga',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                104.6354631, -0.1627686
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Anambas',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                105.6537231,
                                3.1055459
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi DKI Jakarta
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi DKI Jakarta',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            106.845172, -6.211544
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jakarta Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.807915, -6.332973
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jakarta Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.845172, -6.211544
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jakarta Pusat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.845172, -6.211544
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jakarta Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.845172, -6.211544
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Jakarta Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.845172, -6.211544
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kepulauan Seribu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.5071982, -5.7985266
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Jawa Barat
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Jawa Barat',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            107.668887, -7.090911
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bogor',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.8, -6.6
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sukabumi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.922203, -6.92405
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Cianjur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.1307289, -6.8172531
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bandung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.6098111, -6.9147444
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Garut',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.908699, -7.227906
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ciamis',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.35, -7.3333333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tasikmalaya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.214104, -7.327954
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kuningan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.4833333, -6.9833333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Cirebon',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.564003, -6.715534
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Majalengka',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.2258897, -6.8531026
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumedang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.0330554,
                                0.6095949
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Indramayu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.325104, -6.336315
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Subang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.752403, -6.569361
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Purwakarta',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.4499404, -6.5386806
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Karawang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.3375791, -6.3227303
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bekasi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107, -6.2333333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bandung Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.4321959, -6.8937121
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bogor',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.8, -6.6
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bandung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.6098111, -6.9147444
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Sukabumi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.922203, -6.92405
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Cirebon',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.564003, -6.715534
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bekasi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107, -6.2333333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Depok',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.83, -6.39
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Cimahi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                107.5355, -6.880239
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tasikmalaya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.214104, -7.327954
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Banjar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.5333333, -7.3666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Jawa Tengah
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Jawa Tengah',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            110.1402594, -7.150975
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Cilacap',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109, -7.733333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Banyumas',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.140438, -7.4832133
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Banjarnegara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.681396, -7.402706
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Purbalingga',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.3638, -7.390747
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kebumen',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.656502, -7.678682
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Wonosobo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.899399, -7.362109
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Purworejo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.008003, -7.709731
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Magelang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.213799, -7.481253
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Boyolali',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.595901, -7.523819
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Klaten',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.595497, -7.711687
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sukoharjo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.8195292, -7.6808818
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sukoharjo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.8195292, -7.6808818
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Wonogiri',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.920601, -7.817782
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sragen',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.021301, -7.430229
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Karanganyar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.9508333, -7.5961111
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Grobogan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.9625854, -7.0217194
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Blora',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.4166667, -6.95
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Rembang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.345299, -6.71124
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pati',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.038002, -6.751338
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kudus',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.838203, -6.804087
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Demak',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.639297, -6.888115
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Jepara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.6717, -6.5596059
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Semarang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.4166667, -6.9666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Temanggung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.174797, -7.316669
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kendal',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.205597, -6.919686
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Batang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.7234519, -6.8941111
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pekalongan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.669998, -6.882887
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pemalang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.377998, -6.884234
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tegal',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.1333333, -6.8666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Brebes',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.05, -6.8833333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Magelang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.213799, -7.481253
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Surakarta',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.8166667, -7.5666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Salatiga',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.4729, -7.302328
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Semarang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.4166667, -6.9666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pekalongan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.669998, -6.882887
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tegal',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.1333333, -6.8666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi DI Yogyakarta
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi DI Yogyakarta',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            110.4262088, -7.8753849
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kulon Progo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.1640846, -7.8266798
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bantul',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.3341111, -7.8846111
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Gunung Kidul',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.6168921, -8.0305091
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Yogyakarta',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.368797, -7.797224
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sleman',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                110.335403, -7.716165
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Jawa Timur
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Jawa Timur',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            112.2384017, -7.5360639
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Banyuwangi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                114.3669444, -8.2186111
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ponorogo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.466003, -7.867827
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Madiun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.505483, -7.627753
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Magetan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.3381593, -7.6493413
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pacitan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.08769, -8.204614
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangkalan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.7450068, -7.0306912
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Kediri',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.032356, -7.809356
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bondowoso',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.813483, -7.917704
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Blitar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.162762, -8.1014419
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Ngawi',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.46193, -7.38993
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Trenggalek',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.7166667, -8.05
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tulungagung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.9, -8.0666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Nganjuk',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.901808, -7.602932
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Situbondo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.955605, -7.702534
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Malang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.6884549, -8.0495643
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Jember',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.700302, -8.172357
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumenep',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.9060624, -6.9253999
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pasuruan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.8001936, -6.8623098
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pamekasan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.4666667, -7.1666667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Probolinggo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.210675, -7.753965
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bojonegoro',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                124.4669566,
                                0.882681
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lumajang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.226601, -8.137022
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sidoarjo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.7173389, -7.4530278
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tuban',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.9, -6.96667
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lamongan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.3946794, -7.406153
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sampang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                109.2058436, -7.5782556
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Mojokerto',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.427027, -7.488075
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Jombang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.2264794, -7.5468395
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Gresik',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.6555, -7.15665
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Mojokerto',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.4336111, -7.4722222
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Surabaya',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.734398, -7.289166
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Madiun',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                111.513702, -7.629714
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Blitar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.15, -8.1
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Batu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.5239, -7.8671
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Malang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.626503, -7.981894
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Kediri',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.011398, -7.816895
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Probolinggo',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                113.211502, -7.756928
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Pasuruan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                112.903297, -7.644872
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Banten
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Banten',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            106.0640179, -6.4058172
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Pandeglang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.103897, -6.314835
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lebak',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.2522143, -6.5643956
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tangerang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.6318889, -6.1783056
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Serang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.150299, -6.12009
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tangerang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.6318889, -6.1783056
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Cilegon',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.040506, -6.0169825
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Serang',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.150299, -6.12009
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Tangerang Selatan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                106.7180556, -6.2888889
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Bali
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Bali',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            115.188916, -8.4095178
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Jembrana',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                114.6418, -8.361852
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Badung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.1770586, -8.5819296
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Gianyar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.3255, -8.544185
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Klungkung',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.4045111, -8.5389222
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bangli',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.354897, -8.454303
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Karang Asem',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                108.0503042, -6.3996057
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Buleleng',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.126999, -8.113831
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Denpasar',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.222099, -8.65629
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Tabanan',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                115.119797, -8.544516
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Nusa Tenggara Barat
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Nusa Tenggara Barat',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            117.3616476, -8.6529334
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lombok Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.1123078, -8.6464599
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lombok Tengah',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.2777073, -8.694623
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lombok Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.5609857, -8.5134471
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumbawa',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                117.3616476, -8.6529334
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Dompu',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                118.4747173, -8.4966318
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Bima',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                118.727402, -8.460566
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Mataram',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.1166667, -8.5833333
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumbawa Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.8910342, -8.9292907
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kota Bima',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                118.727402, -8.460566
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Lombok Utara',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                116.2777073, -8.3739076
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });

                // Provinsi Nusa Tenggara Timur
                Location.create({
                    parent_id: country._id,
                    name: 'Provinsi Nusa Tenggara Timur',
                    type: 1,
                    location: {
                        type: 'Point',
                        coordinates: [
                            121.0793705, -8.6573819
                        ]
                    },
                    status: 1,
                    timezone: ''
                }, function(err, state) {
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumba Barat',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                119.3947135, -9.6548326
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                    Location.create({
                        parent_id: state._id,
                        name: 'Kabupaten Sumba Timur',
                        type: 2,
                        location: {
                            type: 'Point',
                            coordinates: [
                                120.3435506, -9.9802103
                            ]
                        },
                        status: 1,
                        timezone: ''
                    });
                });
            });
        }
    });
}

exports.createDefaultLocations = createDefaultLocations;
