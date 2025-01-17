const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(5000, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});

const customers = require("./customers/customersRouter");
const suppliers = require("./suppliers/suppliersRouter");
const products = require("./products/productsRouter");
const availability = require("./product_availability/productAvailabilityRouter");
const orders = require("./orders/ordersRouter");

app.use("/customers", customers);
app.use("/suppliers", suppliers);
app.use("/products", products);
app.use("/availability", availability);
app.use("/orders", orders);
