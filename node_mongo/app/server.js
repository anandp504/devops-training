const express = require("express")
const mongoose = require("mongoose")
const routes = require("./api/routes")

try {
  mongoose
    .connect("mongodb://localhost:8000/products", { useNewUrlParser: true })
    .then(() => {
      const app = express()
      app.use(express.json()) // new
      app.use("/api", routes)

      app.listen(5000, () => {
        console.log("Catalog server has started!")
      })
    })
} catch (ex) {
  console.log("Exception when initializing mongodb connection..");
  console.log(ex);
}