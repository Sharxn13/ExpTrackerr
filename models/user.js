const sha256 = require('js-sha256');
// const salt = process.env.SALT;

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let userCreate = (values, callback) => {
    const queryArray = [values.username, sha256(values.password), values.name, values.email];
    const queryString = 'INSERT INTO users (username, password, name, email) VALUES ($1, $2, $3, $4) RETURNING *';

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

  let userLogin = (values, callback) => {
    const queryArray = [values.username];
    console.log(values.username);
    const queryString = 'SELECT * FROM users WHERE username = $1';
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
    userCreate,
    userLogin,
    userProfile
  };
};


