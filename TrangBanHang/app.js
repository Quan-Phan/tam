var createError = require('http-errors');
var express = require('express');
var bcrypt=require('bcrypt');

var path = require('path');
var cookieParser = require('cookie-parser');

 var bodyPasesr=require('body-parser');
 //var exphb=require('express-handlebars');
 var nodemailer=require('nodemailer');

 // var ejs=exphb.create({
 //     layoutsDir:'views',
 //     defaultLayout: 'header.ejs'
 // });


var logger = require('morgan');
var session = require("express-session");
var passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const member=require('./model/member');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField:'password'},
    function (username, password, done) {
      try {
          const list=member.list();
          list.then(tam=>{
              let check=0;
              let k=0;
              for(let i=0;i<tam.length;i++){
                  if(tam[i].ten_dang_nhap==username)
                  {
                      check=1;
                      k=i;
                      break;
                  }
              }
              if(check==0){
                  return done(null,false,{message:'Tên đăng nhập không tồn tại.'});
              }
              bcrypt.compare(password,tam[k].mat_khau,function (err,rs) {
                  if(rs==false)
                      return done(null,false,{message:"Mật khẩu không đúng"});
                  else {
                      if(tam[k].khoa==1){//tài khoản bị khóa
                          return done(null,false);
                      }
                      return done(null,tam[k]);
                  }
              })
          });
      } catch (ex) {
        return done(ex);
      }
    }));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user1= member.getID(id);
  user1.then(row=>{
      const user=row[0]
      done(undefined, user);
  })
});



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.engine('ejs',ejs.engine);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
// app.use(bodyPasesr.urlencoded({
//   extended: true
// }));

app.use(bodyPasesr.urlencoded({extended: false}));
app.use(bodyPasesr.json());

app.use(express.static(path.join(__dirname, 'public')));

 app.use(session({
     secret:'quansecret'
     // cookie:{
     //     secure:false,
     //     maxAge:24*60*60*100//1 ngày
     // }
   }));

 app.use(passport.initialize());
 app.use(passport.session());
// app.use(flash());
 //require('./routes/index.js')(app,passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
//tra lai như củ của mầy kê
//là sao, như bth á hả?
//ukm
//bth đó ?
