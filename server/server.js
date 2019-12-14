const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const controller = require('./controller.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/foodlist', (req, res) => {
    controller.getList(req, res);
})

app.listen(port, () => console.log(`Foodme is listening on port ${port}!`))