const sql = require("./db.js");

const User = function(user) {
    this.username = user.username;
    this.password = user.password
}

User.login = (user,result) => {
    let query = "SELECT * FROM users WHERE username='"+user.username+"' AND password='"+user.password+"' AND status='Active'";
    sql.query(query, (err, res) => {
        if (err) {
          result(null);
          return;
        }
        result(res);
      });
}

module.exports = User;
