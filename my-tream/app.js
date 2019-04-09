var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register')
var loginRouter = require('./routes/login');
// var listRouter = require('./routes/list');
var addlistRouter = require('./routes/addlist');
var deleteimgRouter = require('./routes/deleteimg');
var editlistRouter = require('./routes/editlist');
var goodslistRouter = require('./routes/goodslist');
var listalterRouter = require('./routes/listalter');
var orderlistRouter = require('./routes/orderlist');
var tokenverifyRouter = require('./routes/tokenverify');
var uploadRouter = require('./routes/upload');
var userlistRouter = require('./routes/userlist');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
// app.use('/list',listRouter)
app.use('/addlist',addlistRouter);
app.use('/deleteimg',deleteimgRouter);
app.use('/editlist',editlistRouter);
app.use('/goodslist',goodslistRouter);
app.use('/listalter',listalterRouter);
app.use('/orderlist',orderlistRouter);
app.use('/tokenverify',tokenverifyRouter);
app.use('/upload',uploadRouter);
app.use('/userlist',userlistRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 监听端口
app.listen(1812,()=>{
  console.log('server is running on http://localhost:1812');
})

module.exports = app;
