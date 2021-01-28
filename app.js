const express = require('express');
const bodyParser = require('body-parser');

const validateRoute = require('./routes/validateRule');

const app = express();

app.use(bodyParser.json());

app.use(validateRoute);


app.listen(3000);
