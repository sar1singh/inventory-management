const sql = require("./db.js");

const User = function(user) {
    this.username = user.username;
    this.password = user.password
}

module.exports = {
  login: (user,result) => {
    let query = "SELECT * FROM users WHERE username='"+user.username+"' AND password='"+user.password+"' AND status='Active'";
    sql.query(query, (err, res) => {
        if (err) {
          result(null);
          return;
        }
        result(res);
      });
},

checkExist: (user,result) => {
  let query = "SELECT id FROM users WHERE username='"+user.username+"'";
  sql.query(query, (err, res) => {
      if (err) {
        result(null);
        return;
      }
      result(res);
    });
},

activateUser: (user,result) => {
  let query = "UPDATE users SET status='Active', password='"+user.password+"' WHERE id="+user.id;
  sql.query(query, (err, res) => {
      if (err) {
        result(null);
        return;
      }
      result(res);
    });
},

userAdd: (data,result) => {
  var records = [
      [data.username,data.password]
    ];
  let query = "INSERT INTO `inventory`.`users` (`username`, `password`)"+
   " VALUES ?";
  sql.query(query,[records] ,(err, res) => {
      if (err) {
        result(null);
        return;
      }
      result(res);
    });
  }
}