const express = require('express');

const app = express();
const port = 5000;

// app.get("/", (req, res) => res.send("Hello World!"));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

/* eslint-disable */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
