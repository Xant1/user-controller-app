const User = require('../models/userModel');

exports.getUsers = function (req, res) {
  User.findAll({ raw: true })
    .then((data) => {
      res.render('index.hbs', {
        users: data,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = function (req, res) {
  const userid = req.params.id;
  User.destroy({ where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
