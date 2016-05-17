var mongoose = require('mongoose');
var tree = require('mongoose-materialized-path');

var categorySchema = mongoose.Schema({
    label: {
        type: String,
        required: '{PATH} is required'
    },
    icon: {
        type: String,
    },
    description: {
        type: String
    }
});

categorySchema.plugin(tree);

var Category = mongoose.model('Category', categorySchema);
function createDefaultCategories() {
    Category.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            console.log('CREATING DEFAULT CATEGORIES ####################');

            var categoryRoot = new Category({
                    label: 'Root',
                    icon: '',
                    description: 'Description for category'
                });

            var categoryAutomotive = new Category({
                    label: 'Automotive',
                    icon: 'fa-car',
                    description: 'Description for category 1'
                });

            var categoryGasStation = new Category({
                label: 'Gas Station',
                icon: '',
                description: 'Description for category 1-1'
            });

            var categoryDealer = new Category({
                label: 'Dealer',
                icon: '',
                description: 'Description for category 1-1'
            });

            var categoryAutomotiveRepair = new Category({
                label: 'Repair & Services',
                icon: '',
                description: 'Description for category 1-2'
            });

            var categoryFinancialService = new Category({
                label: 'Financial Service',
                icon: 'fa-money',
                description: 'Description for category 2'
            });

            var categoryBanks = new Category({
                label: 'Banks',
                icon: '',
                description: 'Description for category 2'
            });

            var categoryATMs = new Category({
                label: 'ATMs',
                icon: '',
                description: 'Description for category 2'
            });

            var categoryMoneyChanger = new Category({
                label: 'Money Changer',
                icon: '',
                description: 'Description for category 2'
            });

            var categoryHealthMedicine = new Category({
                label: 'Health & Medicine',
                icon: 'fa-medkit',
                description: 'Description for category 5'
            });

            var categoryDentist = new Category({
                label: 'Dentist',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryHospitalClinic = new Category({
                label: 'Hospital & Clinics',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryLaboratory = new Category({
                label: 'Laboratory',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryPharmacy = new Category({
                label: 'Pharmacy',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryITService = new Category({
                label: 'IT Service',
                icon: 'fa-laptop',
                description: 'Description for category 5'
            });

            var categoryComputerStore = new Category({
                label: 'Computer Store',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryITRepair = new Category({
                label: 'Repair',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryInternetCafe = new Category({
                label: 'Internet Cafe',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryCellularOperator = new Category({
                label: 'Cellular Operator',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryCellularShop = new Category({
                label: 'Cellular Shop',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryTravelTransport = new Category({
                label: 'Travel & Transport',
                icon: 'fa-car',
                description: 'Description for category 5'
            });

            var categoryRental = new Category({
                label: 'Rental',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryCarRental = new Category({
                label: 'Car Rental',
                icon: 'fa-car',
                description: 'Description for category 5'
            });

            var categoryMotorcycleRental = new Category({
                label: 'Motorcycle Rental',
                icon: 'fa-motorcycle',
                description: 'Description for category 5'
            });

            var categoryBicycleRental = new Category({
                label: 'Bicycle Rental',
                icon: 'fa-bicycle',
                description: 'Description for category 5'
            });

            var categoryAirport = new Category({
                label: 'Airport',
                icon: 'fa-plane',
                description: 'Description for category 5'
            });

            var categoryBusStation = new Category({
                label: 'Bus Station',
                icon: 'fa-bus',
                description: 'Description for category 5'
            });

            var categoryTrainStation = new Category({
                label: 'Train Station',
                icon: 'fa-train',
                description: 'Description for category 5'
            });

            var categoryTravel = new Category({
                label: 'Travel',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryShopping = new Category({
                label: 'Shopping',
                icon: 'fa-shopping-bag',
                description: 'Description for category 5'
            });

            var categoryApparel = new Category({
                label: 'Apparel',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryFootwear = new Category({
                label: 'Footwear',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryAccessories = new Category({
                label: 'Accessories',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryGroceries = new Category({
                label: 'Groceries',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryTourism = new Category({
                label: 'Tourism',
                icon: 'fa-map',
                description: 'Description for category 5'
            });

            var categoryGalleries = new Category({
                label: 'Galleries',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryMuseums = new Category({
                label: 'Museums',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryTheatres = new Category({
                label: 'Theatres',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryMonuments = new Category({
                label: 'Monument',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryBeach = new Category({
                label: 'Beach',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryWaterfall = new Category({
                label: 'Waterfall',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryZoos = new Category({
                label: 'Zoos',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryEntertainment = new Category({
                label: 'Entertainment',
                icon: 'fa-gamepad',
                description: 'Description for category 5'
            });

            var categoryCinema = new Category({
                label: 'Cinema',
                icon: '',
                description: 'Description for category 5'
            });

            var categoryBars = new Category({
                label: 'Bars',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryClubs = new Category({
                label: 'Clubs',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryLounge = new Category({
                label: 'Lounge',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryGame = new Category({
                label: 'Game',
                icon: '',
                description: 'Sight seeing'
            });

            var categorySports = new Category({
                label: 'Sports',
                icon: 'fa-futbol-o',
                description: 'Sight seeing'
            });

            var categoryFitnessCentre = new Category({
                label: 'Fitness Centre',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryGolf = new Category({
                label: 'Golf',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryCycling = new Category({
                label: 'Cycling',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryJoggingTrack = new Category({
                label: 'Jogging Track',
                icon: '',
                description: 'Sight seeing'
            });

            var categoryFood = new Category({
                label: 'Food & Drinks',
                icon: 'fa-glass',
                description: 'Description for category 3'
            });

            var categoryCake = new Category({
                label: 'Cake',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryCoffee = new Category({
                label: 'Coffee',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryFastFood = new Category({
                label: 'Fast Food',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryRestaurant = new Category({
                label: 'Restaurant',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryLodging = new Category({
                label: 'Lodging',
                icon: 'fa-bed',
                description: 'Description for category 4'
            });

            var categoryHotels = new Category({
                label: 'Hotels',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryMotels = new Category({
                label: 'Motels',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryHostels = new Category({
                label: 'Hostels',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryApartment = new Category({
                label: 'Apartment',
                icon: '',
                description: 'Description for category 4'
            });

            var categoryVillas = new Category({
                label: 'Vilals',
                icon: '',
                description: 'Description for category 4'
            });

            categoryGasStation.parent = categoryAutomotive;
            categoryDealer.parent = categoryAutomotive;
            categoryAutomotiveRepair.parent = categoryAutomotive;

            categoryBanks.parent = categoryFinancialService;
            categoryMoneyChanger.parent = categoryFinancialService;
            categoryATMs.parent = categoryFinancialService;

            categoryHospitalClinic.parent = categoryHealthMedicine;
            categoryDentist.parent = categoryHealthMedicine;
            categoryLaboratory.parent = categoryHealthMedicine;
            categoryPharmacy.parent = categoryHealthMedicine;

            categoryComputerStore.parent = categoryITService;
            categoryITRepair.parent = categoryITService;
            categoryInternetCafe.parent = categoryITService;
            categoryCellularOperator.parent = categoryITService;
            categoryCellularShop.parent = categoryITService;

            categoryCarRental.parent = categoryRental;
            categoryMotorcycleRental.parent = categoryRental;
            categoryBicycleRental.parent = categoryRental;

            categoryRental.parent = categoryTravelTransport;
            categoryAirport.parent = categoryTravelTransport;
            categoryBusStation.parent = categoryTravelTransport;
            categoryTravel.parent = categoryTravelTransport;
            categoryTrainStation.parent = categoryTravelTransport;

            categoryApparel.parent = categoryShopping;
            categoryFootwear.parent = categoryShopping;
            categoryAccessories.parent = categoryShopping;
            categoryGroceries.parent = categoryShopping;

            categoryGalleries.parent = categoryTourism;
            categoryMuseums.parent = categoryTourism;
            categoryTheatres.parent = categoryTourism;
            categoryMonuments.parent = categoryTourism;
            categoryBeach.parent = categoryTourism;
            categoryWaterfall.parent = categoryTourism;
            categoryZoos.parent = categoryTourism;

            categoryCinema.parent = categoryEntertainment;
            categoryBars.parent = categoryEntertainment;
            categoryClubs.parent = categoryEntertainment;
            categoryLounge.parent = categoryEntertainment;
            categoryGame.parent = categoryEntertainment;

            categoryFitnessCentre.parent = categorySports;
            categoryGolf.parent = categorySports;
            categoryCycling.parent = categorySports;
            categoryJoggingTrack.parent = categorySports;

            categoryRestaurant.parent = categoryFood;
            categoryCake.parent = categoryFood;
            categoryCoffee.parent = categoryFood;
            categoryFastFood.parent = categoryFood;

            categoryHotels.parent = categoryLodging;
            categoryMotels.parent = categoryLodging;
            categoryHostels.parent = categoryLodging;
            categoryApartment.parent = categoryLodging;
            categoryVillas.parent = categoryLodging;

            categoryAutomotive.parent = categoryRoot;
            categoryFinancialService.parent = categoryRoot;
            categoryHealthMedicine.parent = categoryRoot;
            categoryITService.parent = categoryRoot;
            categoryTravelTransport.parent = categoryRoot;
            categoryShopping.parent = categoryRoot;
            categoryTourism.parent = categoryRoot;
            categoryEntertainment.parent = categoryRoot;
            categorySports.parent = categoryRoot;
            categoryFood.parent = categoryRoot;
            categoryLodging.parent = categoryRoot;

            categoryRoot.save(function() {
                categoryAutomotive.save(function() {
                    categoryGasStation.save();
                    categoryDealer.save();
                    categoryAutomotiveRepair.save();
                });
                categoryFinancialService.save(function() {
                    categoryBanks.save();
                    categoryMoneyChanger.save();
                    categoryATMs.save();
                });
                categoryHealthMedicine.save(function() {
                    categoryHospitalClinic.save();
                    categoryDentist.save();
                    categoryLaboratory.save();
                    categoryPharmacy.save();
                });
                categoryITService.save(function() {
                    categoryComputerStore.save();
                    categoryITRepair.save();
                    categoryInternetCafe.save();
                    categoryCellularOperator.save();
                    categoryCellularShop.save();
                });
                categoryTravelTransport.save(function() {
                    categoryRental.save(function() {
                        categoryCarRental.save();
                        categoryMotorcycleRental.save();
                        categoryBicycleRental.save();
                    });
                    categoryAirport.save();
                    categoryBusStation.save();
                    categoryTrainStation.save();
                    categoryTravel.save();
                });
                categoryShopping.save(function() {
                    categoryApparel.save();
                    categoryFootwear.save();
                    categoryAccessories.save();
                    categoryGroceries.save();
                });
                categoryTourism.save(function() {
                    categoryGalleries.save();
                    categoryMuseums.save();
                    categoryTheatres.save();
                    categoryMonuments.save();
                    categoryBeach.save();
                    categoryWaterfall.save();
                    categoryZoos.save();
                });
                categoryEntertainment.save(function() {
                    categoryCinema.save();
                    categoryBars.save();
                    categoryClubs.save();
                    categoryLounge.save();
                    categoryGame.save();
                });
                categorySports.save(function() {
                    categoryFitnessCentre.save();
                    categoryGolf.save();
                    categoryCycling.save();
                    categoryJoggingTrack.save();
                });
                categoryFood.save(function() {
                    categoryRestaurant.save();
                    categoryCake.save();
                    categoryCoffee.save();
                    categoryFastFood.save();
                });
                categoryLodging.save(function() {
                    categoryHotels.save();
                    categoryMotels.save();
                    categoryHostels.save();
                    categoryApartment.save();
                    categoryVillas.save();
                });
            });
        }
    });
}

exports.createDefaultCategories = createDefaultCategories;
