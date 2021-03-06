var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var crypto = require('crypto');
var mime = require('mime');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
        });
    }
});

var upload = multer({storage: storage});
// var upload = multer({dest: './uploads'});
var passport = require('passport');
var http = require('http');
// var multiparty = require('connect-multiparty');

module.exports = function(app, config) {
    // app.use(multiparty({
    //     uploadDir: config.tmp
    // }));

    var oneDay = 86400000;

    switch (config.environment) {
    case 'staging':
        console.log('** SERVING STAGING BUILD **');
        app.use('/', express.static(path.join(config.rootPath, 'build')));
        break;
    case 'production':
        console.log('** SERVING PRODUCTION BUILD **');
        app.use('/', express.static(path.join(config.rootPath, 'build')));
        break;
    default:
        console.log('** SERVING DEVELOPMENT BUILD **');
        app.use('/', express.static(path.join(config.rootPath, 'client'), {maxAge: oneDay}));
        app.use('/', express.static('./'));
        break;
    }

    app.set('views', path.join(config.rootPath, 'client'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(session({
        secret: 'to take over the world',
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};
