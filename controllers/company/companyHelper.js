
const pool = require('../../services/db')

//Uses module
var helpers = {};


module.exports = helpers;

/**
 * Get Companies
 * @param {Object} queryParams 
 * @return Promise - id and name of the company
 */
helpers.getCompanies = (queryParams) => {
    //get DB connection
    const companyId = queryParams ? queryParams.companyId : null;
    return pool.query("select id, name from company order by name")
   
}

