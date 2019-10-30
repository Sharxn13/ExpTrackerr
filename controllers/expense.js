var sha256 = require('js-sha256');
// const SALT = "This is life";
const cookieParser = require('cookie-parser');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let expenseIndexControllerCallback = (req, res) => {
      db.expense.expenseIndex(req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
        }
        if (result != null) {
        res.render('expense/index', data);
        } else {
        res.render('expense/new', data);
        }
      });
  };

  let expenseNewControllerCallback = (req, res) => {
      data = {
        req
      }
      res.render('expense/new', data);
  };

  let expenseCreateControllerCallback = (req, res) => {
      db.expense.expenseCreate(req.body, req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
        }
        res.render('expense/create', data);
      });
  };

  let expenseShowControllerCallback = (req, res) => {
      db.expense.expenseShow(req.params.id, (err, result) => {
        data = {
          req,
          result
        }
        res.render('expense/show', data);
      });
  };

  let expenseDeleteControllerCallback = (req, res) => {
      db.expense.expenseDelete(req.params.id, (err, result) => {
        data = {
          req
        }
        res.render('expense/delete', data);
      });
  };

  let expenseEditControllerCallback = (req, res) => {
      db.expense.expenseEdit(req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/edit', data);
      });
  };

  let expenseUpdateControllerCallback = (req, res) => {
      db.expense.expenseUpdate(req.body, req.params.id, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/update', data);
      });
  };

  let expenseSortControllerCallback = (req, res) => {
      db.expense.expenseSort(req.cookies.user_id, req.body, (err, result) => {
        data = {
          req,
          result
        };
        res.render('expense/indexSort', data);
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return {
    expenseIndex: expenseIndexControllerCallback,
    expenseNew: expenseNewControllerCallback,
    expenseCreate: expenseCreateControllerCallback,
    expenseShow: expenseShowControllerCallback,
    expenseDelete: expenseDeleteControllerCallback,
    expenseEdit: expenseEditControllerCallback,
    expenseUpdate: expenseUpdateControllerCallback,
    expenseSort: expenseSortControllerCallback,
  }
}