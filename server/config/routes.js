var auth = require('./auth');

var userCtrl = require('../controller/userCtrl');
var categoryCtrl = require('../controller/categoryCtrl');
var placeCtrl = require('../controller/placeCtrl');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var path = require('path');

module.exports = function(app, config) {

    app.get('/api/users', auth.requiresRole('admin'), userCtrl.getUsers);
    app.post('/api/users', userCtrl.createUser);
    app.put('/api/users', userCtrl.updateUser);

    app.get('/api/places', placeCtrl.getPlaces);
    app.get('/api/places/:id', placeCtrl.getPlaceById);
    app.post('/api/places', placeCtrl.addNewPlace);
    // app.put('/api/places', placeCtrl.updatePlace); TODO: Update places

    app.get('/api/categories', categoryCtrl.getCategoryTrees);
    app.get('/api/categories/:id', categoryCtrl.getCategoryById);
    app.post('/api/categories', categoryCtrl.addNewCategory);

    //TODO: Get cascaded category path here

    app.post('/login', auth.authenticate);
    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    /*
     * handle all request to api, return 404 if requested through browsers
     */
    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    /*
     * Rewrite url's to serve static index.html files
     */
    app.get('*', function(req, res) {
        switch (config.environment) {
            case 'staging':
            case 'production':
                res.sendFile(path.join(config.rootPath, 'build/index.html'));
                break;
            default:
                res.sendFile(path.join(config.rootPath, 'client/index.html'));
                break;
        }
    });

};
