module.exports = app => {
  const users = require("../controllers/users.controller.js");

  app.post('/login',users.login);

}