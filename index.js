const express = require('express');
const app = express();

const mysql = require('mysql2');

app.use(express.json());


const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'sample-schema',
    });


app.get('/api/v1/clients', (req, res) => {
    console.log(`Request from ${req.ip} to  path ${req.url}.`)
    
    
    connection.query('SELECT * FROM client;',
    (err, data, fields) => {
        if (err) throw err;
        res.status(200).json({
            data,
        })
    })


});


app.post('/api/v1/client/:id', (req,res) => {

    const { id } = req.params;
    const { name } = req.body;

    if (!name){
        console.log(`Request from ${req.ip} to  path ${req.url} was invalid, code 418, no name.`)
        res.status(418).send({ message: 'There is no client name!' })
    } else {
        connection.query('INSERT INTO client VALUE (?, ?);',
        [id, name],
        (err, data, fields) => {
            console.log(data)
        })
        res.status(200).send('ok')
    }
});


const PORT = 8080;

app.listen(
    PORT, 
    () => console.log(`Alive in http://localhost:${PORT}`)
)