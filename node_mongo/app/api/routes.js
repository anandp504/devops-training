var express = require('express')
var mongoose  = require('mongoose');
var bodyParser = require('body-parser')
var router = express.Router()

// create application/json parser
var jsonParser = bodyParser.json()
const Catalog = require('../models/catalog_items');

// console.log("Connecting to products db");
// mongoose.connect('mongodb://localhost:8000/products' , { useNewUrlParser : true });

// respond with "hello world" when a GET request is made to the homepage
router.get('/getItems', async function (req, res) {
  const items = await Catalog.find();
  res.send(items);
})

router.post('/createItem', jsonParser, async function (req, res) {
  var itemId = req.body.item_id;
  var itemName = req.body.item_name;
  var price = req.body.price;

  try {
    const catalogItem = new Catalog({
      itemId: itemId,
      itemName: itemName,
      price: price
    })
    await catalogItem.save()
    res.send(catalogItem);
  } catch (ex) {
    console.log(ex);
    res.send("Error occurred while saving the CatalogItem");
  }

})

module.exports = router;
