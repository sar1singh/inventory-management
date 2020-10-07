const productObj = require("../models/product.model");
const userObj = require("../models/user.model");
const jwt = require('jsonwebtoken');

module.exports = {
  add: (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  const { authorization } = req.headers;
  let decoded = jwt.decode(authorization);
  //check if user name password exist in DB.
  userObj.login(decoded,(value)=>{
    if(value.length > 0) {
      const { data } = req.body;
      let result = {};
      productObj.add(data,(response)=>{
        if(response && response.insertId) {
          result.data = response.insertId;
          result.status = 'Success';
          result.message= 'Product Added Successfully.'
        } else {
          result.data = null;
          result.status = 'Failure';
          result.message= 'Failed to add product.'
        }
        res.send(result);
      })
    }
  });
},
  list: (req, res) => {
  const { authorization } = req.headers;
  let decoded = jwt.decode(authorization);
  //check if user name password exist in DB.
  userObj.login(decoded,(value)=>{
    if(value.length > 0) {
      const { data } = req.body;
      let result = {};
      productObj.list(data,(response)=>{
        if(response) {
          result.data = response;
          result.status = 'Success';
          result.message= 'Product list fetched.'
        } else {
          result.data = null;
          result.status = 'Failure';
          result.message= 'Failed to list products.'
        }
        res.send(result);
      })
    }
  });
},
productDetails: (req, res) => {
  const { authorization } = req.headers;
  let decoded = jwt.decode(authorization);
  //check if user name password exist in DB.
    userObj.login(decoded,(value)=>{
      if(value.length > 0) {
        const { id } = req.params;
        let result = {};
        productObj.list(id,(response)=>{
          if(response) {
            result.data = response[0];
            result.status = 'Success';
            result.message= 'Product details fetched.'
          } else {
            result.data = null;
            result.status = 'Failure';
            result.message= 'Failed to get product details.'
          }
          res.send(result);
        })
      }
    });
},
productDelete: (req, res) => {
  const { authorization } = req.headers;
  let decoded = jwt.decode(authorization);
  //check if user name password exist in DB.
    userObj.login(decoded,(value)=>{
      if(value.length > 0) {
        const { id } = req.params;
        let result = {};
        productObj.delete(id,(response)=>{
          if(response && response.changedRows) {
            result.data = {};
            result.status = 'Success';
            result.message= 'Product deleted.'
          } else {
            result.data = null;
            result.status = 'Failure';
            result.message= 'Product deletetion failed.'
          }
          res.send(result);
        })
      }
    });
},
}