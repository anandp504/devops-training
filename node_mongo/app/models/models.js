var catalogItems = require('./catalog_items.js');

module.exports.initialize = function () {
    return {
        catalog: catalogItems()
    };
}