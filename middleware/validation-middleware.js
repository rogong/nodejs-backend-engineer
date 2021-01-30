const validator = require('../Helper/validate');

const rule = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    github: 'required|string',
    email: 'required|email',
    mobile: 'required|string',
    twitter: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        rule: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  rule,
};
