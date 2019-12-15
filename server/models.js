var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'food'
});

connection.connect();

module.exports = {
  getList: callback => {
    const query = "select * from foodlist;";
    connection.query(query, function (error, results) {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  },

  addFood: (data, callback) => {

    const query = `insert foodlist (foodName, calories, protein, sugar, carb) values ('${data.food_name}', ${data.nf_calories}, ${data.nf_protein}, ${data.nf_sugars}, ${data.nf_total_carbohydrate});`

    connection.query(query, function (err, results) {
      if (err) {
        callback(err)
      } else {

        callback(null, results);
      }
    })

  }

}