const sql = require("./db.js");

module.exports = {
    add: (data,result) => {
        var records = [
            [data.name,data.productId,data.type,data.storeName,'Active',data.createdBy]
          ];
        let query = "INSERT INTO `inventory`.`products` (`name`, `product_id`, `type`, `store_name`, `status`, `created_by`)"+
         " VALUES ?";
        sql.query(query,[records] ,(err, res) => {
            if (err) {
              result(null);
              return;
            }
            result(res);
          });
    },

    list: (id=null,result) => {
        let query = "SELECT * from products where status ='Active'";
        if(id) {
            query += " AND id="+id
        }
        query +=' ORDER BY id DESC'
        sql.query(query ,(err, res) => {
            if (err) {
              result(null);
              return;
            }
            result(res);
          });
    },
    delete: (id,result) => {
        let query = "UPDATE products SET status='Inactive' WHERE id="+id;
        sql.query(query ,(err, res) => {
            if (err) {
              result(null);
              return;
            }
            result(res);
          });
    }
}