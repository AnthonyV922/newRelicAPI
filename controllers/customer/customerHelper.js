
const pool = require('../../services/db')

//Uses module
var helpers = {};


module.exports = helpers;

/**
 * Get Customers
 * @param {String} queryParams
 * @return Promise - id and first_name, last_name, companyid, and company_name of users
 */
helpers.getCustomers = (queryParams) => {
    //get DB connection
    const companyName = queryParams && queryParams.filter_by_company_name && queryParams.filter_by_company_name != 'All Companies' ? queryParams.filter_by_company_name : null;
    const searchText = queryParams && queryParams.search ? queryParams.search : null;
    return pool.query("select users.id, first_name,last_name, companyid, company.name as company_name from users left join company on users.companyid = company.id where ($1::character varying is null OR company.name = $1::character varying) and ($2::character varying is null OR (users.first_name ~* $2::character varying OR users.last_name ~* $2::character varying OR CONCAT(users.first_name, ' ', users.last_name) ~* $2::character varying)) order by users.first_name",[companyName, searchText])
   
}

