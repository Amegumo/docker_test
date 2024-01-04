const express = require('express');
require('dotenv').config();


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World succeeded request');
});
app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);