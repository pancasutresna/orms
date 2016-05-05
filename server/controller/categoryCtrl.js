var Category = require('mongoose').model('Category');

exports.getCategoryTrees = function(req, res) {
    Category.findOne({label:'Root'}).exec(function(err, category) {
        category.getChildrenTree(function(err, cat) {
            res.send(cat);
        });
    });
};

exports.getCategories = function(req, res) {
    Category.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};

exports.getCategoryById = function(req, res) {
    Category.findOne({_id:req.params.id}).exec(function(err, category) {
        res.send(category);
    });
};

exports.addNewCategory = function(req, res, next) {
    // TODO: Add this
    console.log('ADDING new Category');
};
