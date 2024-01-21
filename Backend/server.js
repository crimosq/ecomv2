const express = require ('express');

const mysql = require('mysql2');

const cors = require('cors');

const app = express()

app.use(cors())

const db = mysql.createConnection({
host: "sql5.freesqldatabase.com" ,
user: 'sql5678621',
password: '9a7uRrpWDH',
database: 'sql5678621',
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