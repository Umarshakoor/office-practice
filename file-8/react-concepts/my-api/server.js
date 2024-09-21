const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Sample data
const products = [
  { id: 1, name: "Product A", price: 30 },
  { id: 2, name: "Product B", price: 45 },
  { id: 3, name: "Product C", price: 25 },
];

// API route to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
