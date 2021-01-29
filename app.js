const express = require('express');
const bodyParser = require('body-parser');

const validateRoute = require('./routes/validateRule');

const app = express();

app.use(bodyParser.json());

app.use(validateRoute);

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.listen(port);
