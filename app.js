//import routes
const createRouter = require('./routes/create.router');
const addUserRouter = require('./routes/add.user.router');
const indexRouter = require('./routes/index.router');
const editRouter = require('./routes/edit.router');
const deleteRouter = require('./routes/delete.user.router');

const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const PORT = 3333;

app.set('view engine', 'hbs');

app.listen(PORT, function () {
  console.log(`the server is running on port ${PORT}`);
});

//get all users in home page
app.get('/', indexRouter);
//get create page
app.get('/create', createRouter);
//add new user
app.post('/create', urlencodedParser, addUserRouter);
//get edit page
app.get('/edit/:id', editRouter);
//edit the user
app.post('/edit', urlencodedParser, editRouter);
//delete a user
app.post('/delete/:id', deleteRouter);
