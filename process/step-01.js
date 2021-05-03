const express = require('express');
const app = express();



const PORT = 8080;
app.listen(
    PORT, 
    () => console.log(`Alive in http://localhost:${PORT}`)
)

//npm init -y

//npm install express mysql2