const User = require('../models/userModel');

exports.getEditPage = function (req, res) {
  const userid = req.params.id;
  User.findAll({ where: { id: userid }, raw: true })
    .then((data) => {
      res.render('edit.hbs', {
        user: data[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.editTheUser = function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const userage = req.body.age;
  const userid = req.body.id;
  User.update({ name: username, age: userage }, { where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
};
