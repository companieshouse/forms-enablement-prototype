var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.post('/examples/over-18', function (req, res) {
  var over18 = req.body.over18;
  if (over18 == "false"){
    res.redirect("/examples/under-18");
  } else {
    res.render('examples/over-18');
  }
});

// Forms Service Start Page
router.get('/forms/collection', function (req, res) {
  res.render('forms/collection');
});

// Forms Service Start Page
router.get('/forms/start', function (req, res) {
  res.render('forms/start');
});

// Checklist
router.get('/forms/checklist', function (req, res) {
  res.render('forms/checklist');
});

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

// Before You Begin - DS01
router.get('/DS01/before-you-begin', function (req, res) {
  res.render('forms/DS01/before-you-begin');
});

// Company Information
router.post('/forms/DS01/company-details', function (req, res) {
  res.render('forms/DS01/company-details');
});

// Company Confirmation
router.post('/forms/DS01/confirm-company', function (req, res) {
  res.render('forms/DS01/confirm-company');
});

// Director Email Addresses
router.post('/forms/DS01/directors', function (req, res) {
  res.render('forms/DS01/directors');
});

// Docusign
router.post('/forms/DS01/docusign', function (req, res) {
  res.render('forms/DS01/docusign');
});

// Docusign - Add Sig
router.post('/forms/DS01/add-sig', function (req, res) {
  res.render('forms/DS01/add-sig');
});

// Docusign - Sig Tool
router.post('/forms/DS01/signature-tool', function (req, res) {
  res.render('forms/DS01/signature-tool');
});

// Docusign - Sig Confirmation
router.post('/forms/DS01/signature-confirmation', function (req, res) {
  res.render('forms/DS01/signature-confirmation');
});

// Signature Request Review
router.post('/forms/DS01/review', function (req, res) {
  res.render('forms/DS01/review');
});

// Docusign - Payment
router.post('/forms/DS01/payment', function (req, res) {
  res.render('forms/DS01/payment');
});

// Docusign - Confirmation
router.post('/forms/DS01/confirmation', function (req, res) {
  res.render('forms/DS01/confirmation');
});

// My Forms View
router.get('/forms/my-forms', function (req, res) {
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


module.exports = router;
