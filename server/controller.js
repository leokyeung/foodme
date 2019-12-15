const Models = require('./models.js');

module.exports = {
    getList: (req, res) => {
        Models.getList((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        });
    },

    addFood: (req, res) => {
        Models.addFood(req.body, (err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        });
    }


}