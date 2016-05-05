var mongoose = require('mongoose');
var tree = require('mongoose-materialized-path');

var categorySchema = mongoose.Schema({
    label: {
        type: String,
        required: '{PATH} is required'
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
                    description: 'Description for category'
                });

            var category1 = new Category({
                    label: 'Category 1',
                    description: 'Description for category 1'
                });

            var category11 = new Category({
                label: 'Category 1 1',
                description: 'Description for category 1-1'
            });

            var category111 = new Category({
                label: 'Category 1 1 1',
                description: 'Description for category 1-1-1'
            });

            var category112 = new Category({
                label: 'Category 1 1 2',
                description: 'Description for category 1-1-2'
            });

            var category113 = new Category({
                label: 'Category 1 1 3',
                description: 'Description for category 1-1-3'
            });

            var category12 = new Category({
                label: 'Category 1 2',
                description: 'Description for category 1-2'
            });

            var category13 = new Category({
                label: 'Category 1 3',
                description: 'Description for category 1-3'
            });

            var category2 = new Category({
                label: 'Category 2',
                description: 'Description for category 2'
            });

            var category3 = new Category({
                label: 'Category 3',
                description: 'Description for category 3'
            });

            var category4 = new Category({
                label: 'Category 4',
                description: 'Description for category 4'
            });

            var category5 = new Category({
                label: 'Category 5',
                description: 'Description for category 5'
            });

            category111.parent = category11;
            category112.parent = category11;
            category113.parent = category11;

            category11.parent = category1;
            category12.parent = category1;
            category13.parent = category1;

            category1.parent = categoryRoot;
            category2.parent = categoryRoot;
            category3.parent = categoryRoot;
            category4.parent = categoryRoot;
            category5.parent = categoryRoot;

            categoryRoot.save(function() {
                category1.save(function() {
                    category11.save(function() {
                        category111.save();
                        category112.save();
                        category113.save();
                    });

                    category12.save();
                    category13.save();
                });
                category2.save();
                category3.save();
                category4.save();
                category5.save();
            });
        }
    });
}

exports.createDefaultCategories = createDefaultCategories;
