// const userObj = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: (req, res) => {
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    //check if user name password exist in DB.
    const { username, password } = req.body;

    let result = {};
    if(password =='sarwan') {
      // Create a token
      const payload = { user: username };
      const options = { expiresIn: '1m',};
      const secret = 'addjsonwebtokensecretherelikeQuiscustodietipsoscustodes'; //for production this will be saved in env file.
      const token = jwt.sign(payload, secret, options);

      result.token = token;
      result.status = 'Success';
    } else {
      status = 'Failure';
      result.status = status;
      result.message = `Authentication error.`;
    }
    res.status(200).send(result);
  }
}