module.exports = function(router) {

  // changing the share class page
  router.get('/forms/SH02/changing-share-capital', function (req, res) {
    res.render('forms/SH02/changing-share-capital');
  });

  router.post('/forms/SH02/changing-share-capital', function (req, res) {
    var changes = req.body.changesGroup;
    if (changes == null) {
      res.render('forms/SH02/changing-share-capital');
    } else {
      switch (changes) {
        case "consolidation":
            res.redirect('/forms/SH02/consolidation');
            break;
        case "sub-division":
            res.redirect('/forms/SH02/sub-division');
            break;
        case "redemption":
            res.redirect('/forms/SH02/redemption');
            break;
        case "re-conversion":
            res.redirect('/forms/SH02/re-conversion');
            break;
      }
    }
  });

};
