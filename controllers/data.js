

exports.getData = (req, res, next) => {
  res.status(200).json({
    message: 'My Rule-Validation API',
    status: 'success',
    data: [
      {
        name: 'Oluseyi Ayinde',
        github: 'https://github.com/rogong',
        email: 'p.oluseyi@yahoo.com',
        mobile: '08064373324',
        twitter: '',
      },
    ],
  });
};

exports.createData = (req, res, next) => {
  
  const name = req.body.name;
  const github = req.body.github;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const twitter = req.body.twitter;

  //Create
  res.status(201).json({
    message: 'My Rule-Validation API',
    status: 'success',
    data: {
      name: name,
      github: github,
      email: email,
      mobile: mobile,
      twitter: twitter
    }
  });
};
