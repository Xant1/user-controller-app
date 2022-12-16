const User = require('../models/userModel');

exports.getCreatePage = function (req, res) {
  res.render('create.hbs');
};

exports.newUser = function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const userage = req.body.age;
  User.create({ name: username, age: userage })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
