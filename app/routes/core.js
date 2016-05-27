module.exports = function(router) {


  // Forms Service Home
  router.get('/forms/home', function (req, res) {
    res.render('forms/home');
  });

  // Sign In
  router.get('/forms/sign-in', function (req, res) {
    res.render('forms/sign-in');
  });

  // Create Account
  router.get('/forms/create-an-account', function (req, res) {
    res.render('forms/create-an-account');
  });

  // Password Reminder
  router.get('/forms/password-reminder', function (req, res) {
    res.render('forms/password-reminder');
  });

  // Password Reset Sent
  router.post('/forms/reset-email-sent', function (req, res) {
    res.render('forms/reset-email-sent');
  });

  // My Forms View
  router.post('/forms/my-forms', function (req, res) {
    res.render('forms/my-forms');
  });

  // Feedback
  router.get('/forms/feedback', function (req, res) {
    res.render('forms/feedback');
  });

  // Signout
  router.get('/forms/signout', function (req, res) {
    res.render('forms/signout');
  });

};
