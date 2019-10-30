const sha256 = require('js-sha256');
const salt = process.env.SALT;

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let statisticByCategory = (values, callback) => {
    const queryArray = [values.cookies.user_id, values.body.start_date, values.body.end_date];
    const queryString = 'SELECT category, sum(amount) AS cat_expense FROM expenses WHERE user_id = $1 AND date BETWEEN $2 AND $3 GROUP BY category';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let statisticTotalExpense = (values, callback) => {
    const queryArray = [values.cookies.user_id, values.body.start_date, values.body.end_date];
    const queryString = 'SELECT sum(total_expense.cat_expense) FROM (SELECT category, sum(amount) AS cat_expense FROM expenses WHERE user_id = $1 AND date BETWEEN $2 AND $3 GROUP BY category) AS total_expense;';
    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult);
        }else{
          callback(null, null);
        }
      }
    });
  };

  let userProfile = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * FROM users WHERE id = $1';

    dbPoolInstance.query(queryString, queryArray, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });
  };

  return {
    statisticByCategory,
    statisticTotalExpense,
  };
};