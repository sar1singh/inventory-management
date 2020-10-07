const userObj = require("../models/user.model");
const jwt = require('jsonwebtoken');

module.exports = {
    login: (req, res) => {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    //check if user name password exist in DB.
    const { data } = req.body;
    let result = {};
    userObj.login(data,(value)=>{
      if(value.length > 0) {
      // Create a token
      const payload = data;
      const options = { expiresIn: '10m',};
      const secret = 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes'; //for production this will be saved in env file.
      const token = jwt.sign(payload, secret, options);

      //we can later save this token in DB or Cache. to add JWT auth for every API
      result.data = token;
      result.status = 'Success';
      result.message= 'User found.'
      } else {
        result.data = value;
        result.status = 'Failure';
        result.message= 'Unauthorized Access.User not found.'
      }
      res.send(result);
    });
  }
}