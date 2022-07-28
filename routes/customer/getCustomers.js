const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const customer = require('../../controllers/customer/customerHelper')
const app = express()
  // define the home page route
router.get('/customers', (req, res) => {
})

router.use((req, res, next) => {
  
    customer.getCustomers(req.query).then((result) => {
      const rows = result && result.rows ? result.rows : [];
      res.send(rows)
  }).catch(next);
})

app.use('/', router)
module.exports = router