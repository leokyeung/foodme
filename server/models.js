var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'food'
});

connection.connect();

module.exports = {
  getList: callback => {
    const query = "select * from foodlist";
    connection.query(query, function (error, results) {
      if(error) {
        callback(error);
      } else {
        callback(null,results);
      }
    });
  }

}