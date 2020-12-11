const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utils/sqlConnectionString');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const data = await db.execute('SELECT * FROM products');
    res.send(data[0])
})

app.listen(3000);
