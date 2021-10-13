const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let catalogItems = new Schema({
  itemId: String,
  itemName: String,
  price: Number
});

const catalog_items = mongoose.model("catalog", catalogItems);
module.exports = catalog_items;