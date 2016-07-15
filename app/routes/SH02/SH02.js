module.exports = function(router) {

  // changing the share class page
  router.get('/forms/SH02/changing-share-capital', function (req, res) {
  res.render('forms/SH02/changing-share-capital');
  });

  // Adding the figues etc for consilidation or sub-division
  router.get('/forms/SH02/consilidation-sub-division', function (req, res) {
  res.render('forms/SH02/consilidation-sub-division');
  });

  // Adding the figues etc for redemption
  router.get('/forms/SH02/redemption', function (req, res) {
  res.render('forms/SH02/redemption');
  });

  // Adding the figues etc for re-conversion
  router.get('/forms/SH02/re-conversion', function (req, res) {
  res.render('forms/SH02/re-conversion');
  });

};
