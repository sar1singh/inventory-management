const sql = require("./db.js");

const User = function(user) {
    this.email = user.email;
    this.password = user.password
}

User.login = (user,result) => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("customers: ", res);
        result(null, res);
      });
}

module.exports = User;
