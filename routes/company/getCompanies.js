const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const company = require('../../controllers/company/companyHelper')
const app = express()
  // define the home page route

  router.get('/companies', (req, res) => {})

router.use((req, res, next) => {
    company.getCompanies(req.query).then((result) => {
      const rows = result && result.rows ? result.rows : [];
      const data = [{id: 0, name: 'All Companies'}].concat(rows);
      res.send(data)
  }).catch(err => res.send(err.detail));
})


app.use('/', router)

module.exports = router