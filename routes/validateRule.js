const express = require('express');
const validationMiddleware = require('../middleware/validation-middleware');

const dataController = require('../controllers/data');

const router = express.Router();





router.post(
  '/validate-rule', validationMiddleware.rule,
  dataController.createData
);

router.get('/', dataController.getData);

module.exports = router;
