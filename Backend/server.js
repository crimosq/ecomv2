const express = require ('express');

const mysql = require('mysql2');

const cors = require('cors');

const app = express()

app.use(cors())

const db = mysql.createConnection({
host: "sql5.freemysqlhosting.net" ,
user: 'sql5677985',
password: 'Nh2sSBZIv5',
database: 'ecom',
port: '3306'
})


app.get('/', (req, res) => {

    return res.json('From backend Side');
})

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});




app.listen(8081, () => {
console.log('Listening in port 8081')

})