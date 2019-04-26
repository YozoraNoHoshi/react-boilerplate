/* eslint-disable consistent-return */
const express = require('express');
const router = new express.Router();
const Strings = require('../models/Strings');

router.get('/', async function getToStrings(req, res, next) {
  try {
    const strings = await Strings.getStrings();
    return res.json({ strings });
  } catch (error) {
    next(error);
  }
});
router.post('/add', async function addToStrings(req, res, next) {
  try {
    if (!req.body.newString) {
      const err = new Error('Missing required property "newString"');
      err.status = 400;
      throw err;
    }
    const string = await Strings.addString(req.body.newString);
    return res.json({ string });
  } catch (error) {
    next(error);
  }
});

router.use(function handle404(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// eslint-disable-next-line no-unused-vars
router.use(function errorHandler(err, req, res, next) {
  // if (err.stack) console.log(err.stack);
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

module.exports = router;
