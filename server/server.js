const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');
const controller = require('./controller.js');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/foodlist', (req, res) => {
    controller.getList(req, res);
})

app.post('/food', (req, res) => {
    controller.addFood(req, res);
})

app.listen(port, () => console.log(`Foodme is listening on port ${port}!`))