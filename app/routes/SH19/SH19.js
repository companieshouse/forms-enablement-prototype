module.exports = function(router) {

  // start page
  router.get('/forms/SH19/start', function (req, res) {
  res.render('forms/SH19/start');
  });

  // Is it a plc or limited company?
  router.get('/forms/SH19/plc-or-limited', function (req, res) {
  res.render('forms/SH19/plc-or-limited');
  });

  // company number page
  router.get('/forms/SH19/company-details', function (req, res) {
  res.render('forms/SH19/company-details');
  });

  // auth code page
  router.get('/forms/SH19/auth-code', function (req, res) {
  res.render('forms/SH19/auth-code');
  });

  // what's the share class and rights?
  router.get('/forms/SH19/share-class-details', function (req, res) {
  res.render('forms/SH19/share-class-details');
  });

  // table page where you choose to add share amouonts or add ones with diff class
  router.get('/forms/SH19/table-page', function (req, res) {
  res.render('forms/SH19/table-page');
  });

  // add share amount, nom val, currency etc
  router.get('/forms/SH19/add-share-amount', function (req, res) {
  res.render('forms/SH19/add-share-amount');
  });

  // upload attachments screen
  router.get('/forms/SH19/upload-attachments', function (req, res) {
  res.render('forms/SH19/upload-attachments');
  });

  // review your application and checkbox
  router.get('/forms/SH19/review', function (req, res) {
  res.render('forms/SH19/review');
  });

  // application is complete
  router.get('/forms/SH19/complete', function (req, res) {
  res.render('forms/SH19/complete');
  });
};
