module.exports = app => {
  const users = require("../controllers/users.controller.js");

  app.post('/login',users.login);
  app.post('/register',users.addUser);

}