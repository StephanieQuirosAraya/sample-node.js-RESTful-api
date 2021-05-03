const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/v1/clients', (req, res) => {
    console.log(`Request from ${req.ip} to  path ${req.url}.`)
    res.status(200).send({
        sample: 'some-text',
        response: 'some other text'
    })
});

app.post('/api/v1/client/:id', (req,res) => {

    const { id } = req.params;
    const { name } = req.body;

    if (!name){
        console.log(`Request from ${req.ip} to  path ${req.url} was invalid, code 418, no name.`)
        res.status(418).send({ message: 'There is no client name!' })
    } else {
        console.log(`Request from ${req.ip} to  path ${req.url} valid request. Registered client ${id} named ${name}.`)
        res.status(201).send()
    }
});


const PORT = 8080;

app.listen(
    PORT, 
    () => console.log(`Alive in http://localhost:${PORT}`)
)