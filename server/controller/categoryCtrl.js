var Category = require('mongoose').model('Category');

exports.getCategoryTrees = function(req, res) {
    Category.findOne({label:'Root'}).exec(function(err, category) {
        category.getChildrenTree(function(err, cat) {
            console.log('categories %o', cat);
            res.send(cat);
        });
    });
};

exports.getCategories = function(req, res) {
    Category.find({}).exec(function (err, collection) {
        res.send(collection);

        // var categories = collection;
        // var output = [];
        // categories[0].getChildrenTree(function(err, cat) {
        //     console.log('categories %o', cat);
        //     output = cat;

        // });

        // console.log('output categories %o', output);
        // var input = [];//['Fred,Jim,Bob', 'Fred,Jim', 'Fred,Thomas,Rob', 'Fred'];
        // categories.forEach(function(category) {
        //     input.push(category.path);
        // });

        // var output = [];
        // for (var i = 0; i < input.length; i++) {
        //     var chain = input[i].split(',');
        //     var currentNode = output;
        //     for (var j = 0; j < chain.length; j++) {
        //         var wantedNode = chain[j];
        //         var lastNode = currentNode;
        //         for (var k = 0; k < currentNode.length; k++) {
        //             if (currentNode[k].label === wantedNode) {
        //                 currentNode = currentNode[k].children;
        //                 break;
        //             }
        //         }
        //         // If we couldn't find an item in this list of children
        //         // that has the right label, create one:
        //         if (lastNode === currentNode) {
        //             var newNode = currentNode[k] = {label: wantedNode, children: []};
        //             currentNode = newNode.children;
        //         }
        //     }
        // }
        // res.send(output);
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
