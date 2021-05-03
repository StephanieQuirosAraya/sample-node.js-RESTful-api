const express = require('express');
const app = express();

app.get('/api/v1/clients', (req, res) => {
    console.log(`Request from ${req.ip} to  path ${req.url}.`)
    res.status(200).send({
        sample: 'some-text',
        response: 'some other text'
    })
});

const PORT = 8080;
app.listen(
    PORT, 
    () => console.log(`Alive in http://localhost:${PORT}`)
)