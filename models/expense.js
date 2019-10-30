const sha256 = require('js-sha256');
// const salt = process.env.SALT;

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  let expenseIndex = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * FROM expenses WHERE user_id = $1';

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

  let expenseCreate = (v1, v2, callback) => {
    const queryArray = [v1.category, v1.date, v1.amount, v1.message, v2];
    const queryString = 'INSERT INTO expenses (category, date, amount, message, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';

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

  let expenseShow = (values, callback) => {
    const queryArray = [values];
    const queryString = 'SELECT * FROM expenses WHERE id = $1';

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

  let expenseDelete = (values, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'DELETE FROM expenses where id = $1 RETURNING *';

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

  let expenseEdit = (values, callback) => {
    const queryArray = [parseInt(values)];
    const queryString = 'SELECT * from expenses where ID = $1';

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

  let expenseUpdate = (v1, v2, callback) => {
    const queryArray = [v1.category, v1.date, v1.amount, v1.message, v2];
    const queryString = 'UPDATE expenses SET category = $1, date = $2, amount = $3, message = $4 where id = $5 RETURNING *';

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

  let expenseSort = (v1, v2, callback) => {
    const queryArray = [parseInt(v1)];
    const queryString = `SELECT * FROM expenses WHERE user_id = $1 ORDER BY ${v2.sortType} ${v2.sortOrder}`;

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
    expenseIndex,
    expenseCreate,
    expenseShow,
    expenseDelete,
    expenseEdit,
    expenseUpdate,
    expenseSort,
    // receiptUpload
  };
};