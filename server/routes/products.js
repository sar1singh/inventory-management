module.exports = app => {
    const products = require("../controllers/products.controller.js");
  
    app.post('/product/add',products.add);
    app.get('/list',products.list);
    app.get('/product/:id',products.productDetails);
    app.delete('/product/:id',products.productDelete);
  }