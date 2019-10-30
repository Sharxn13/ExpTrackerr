/*
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 */

const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'sharon13',
    host: '127.0.0.1',
    database: 'expense_db',
    port: '5432'
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 */

const allExpenseModelsFunction = require('./models/expense');

const expenseModelsObject = allExpenseModelsFunction( pool );

const allUserModelsFunction = require('./models/user');

const userModelsObject = allUserModelsFunction( pool );

const allStatsModelsFunction = require('./models/stats');

const statsModelsObject = allStatsModelsFunction( pool );

/*
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 */

module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  expense: expenseModelsObject,
  user: userModelsObject,
  stats: statsModelsObject
};