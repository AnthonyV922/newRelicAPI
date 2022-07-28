var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
const customers = require('./routes/customer/getCustomers')
const company = require('./routes/company/getCompanies')
const client = require('./services/db')
app.use('/customers', customers);
app.use('/companies', company)


module.exports = app;
