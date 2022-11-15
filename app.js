const express = require('express');
const app = express();

const User = require('./models/userModel');

const urlencodedParser = express.urlencoded({ extended: false });

const PORT = 3333;

app.set('view engine', 'hbs');

app.listen(PORT, function () {
  console.log(`the server is running on port ${PORT}`);
});

app.get('/', function (req, res) {
  User.findAll({ raw: true })
    .then((data) => {
      res.render('index.hbs', {
        users: data,
      });
    })
    .catch((err) => console.log(err));
});

app.get('/create', function (req, res) {
  res.render('create.hbs');
});

app.post('/create', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const userage = req.body.age;
  User.create({ name: username, age: userage })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

app.get('/edit/:id', function (req, res) {
  const userid = req.params.id;
  User.findAll({ where: { id: userid }, raw: true })
    .then((data) => {
      res.render('edit.hbs', {
        user: data[0],
      });
    })
    .catch((err) => console.log(err));
});

app.post('/edit', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const username = req.body.name;
  const userage = req.body.age;
  const userid = req.body.id;
  User.update({ name: username, age: userage }, { where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

app.post('/delete/:id', function (req, res) {
  const userid = req.params.id;
  User.destroy({ where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});
