const sha256 = require('js-sha256');
// const salt = process.env.SALT;

module.exports = (db) => {

    /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   let userNewControllerCallback = (req,res) => {
    res.render('users/new');
   };

   let userCreateControllerCallback = (req,res) => {
    db.user.userCreate(req.body, (err,result) => {
        data = {
            req,
            result
        }
        res.render('users/create', data);
    });
   };

   let userLoginControllerCallback = (req,res) => {
    res.render('users/login');
   };

   let userLoggedInControlCallback = (req,res) => {
    db.user.userLogin(req.body, (err,result) => {
        // if (err) {
            console.log(result);
        //     res.send('query error');
        // }else{
            if (result.rows.length != null) {
                let hashedPassword = sha256(req.body.password);
                if (hashedPassword === result.rows[0].password) {
                    let user_id = result.rows[0].id;
                    let hashedCookie = sha256(req.body.username);
                    res.cookie('user_id', user_id);
                    res.cookie('hasLoggedIn', hashedCookie);
                    res.cookie('username', req.body.username);
                    res.redirect('/');
                }else{
                    console.log(sha256('123'));
                    res.status(403).send('wrong password');
                }
            // }else{
            //     res.status(403).send('wrong username');
            // }
        }
    });
   };

   let userProfileControllerCallback = (req, res) => {
      db.user.userProfile(req.cookies.user_id, (err, result) => {
        data = {
          req,
          result
        }
        res.render('users/show', data);
      });
  };

  let userLogoutControllerCallback = (req,res) => {
    res.clearCookie('user_id');
    res.clearCookie('hasLoggedIn');
    res.clearCookie('username');
    res.redirect('/login');
  };

   /*
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return {
    userCreate: userCreateControllerCallback,
    userNew: userNewControllerCallback,
    userLogin: userLoginControllerCallback,
    userLoggedIn: userLoggedInControlCallback,
    userProfile: userProfileControllerCallback,
    userLogout: userLogoutControllerCallback
   };
}