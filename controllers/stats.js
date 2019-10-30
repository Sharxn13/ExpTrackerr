const sha256 = require('js-sha256');
// const salt = process.env.SALT;

module.exports = (db) => {

    /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let statsNewControllerCallback = (req,res) => {
    data = {
        req
    }
    res.render('stats/newExp', data);
   };

   let statsCreateControllerCallback = (req,res) => {
        db.stats.statsByCat (req, (err,result) => {
            db.stats.statsTotalExp(req, (err, result2) => {
                data = {
            req,
            result,
            result2
          }
          res.render('stats/create', data);
        });
        });
   };

   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return {
    statsNew: statsNewControllerCallback,
    statsCreate: statsCreateControllerCallback
   };
}