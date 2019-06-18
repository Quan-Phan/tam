var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bcrypt=require('bcrypt')
var bodyPasesr=require('body-parser');
var passport = require('passport')
var session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const member=require('./models/member');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());

/*app.use(session({secret: "mysecret"}))
app.use(passport.initialize());
app.use(passport.session());*/

passport.use(new LocalStrategy({
        usernameField: 'nameUser',
        passwordField:'namePass'},
    function (nameUser, namePass, done,res) {
      try {
          const list=member.list();
          list.then(tam=>{
              let check=0;
              let k=0;
              for(let i=0;i<tam.length;i++){
                  if(tam[i].ten_dang_nhap==nameUser)
                  {
                      check=1;
                      k=i;
                      break;
                  }
              }
              if(check==0){
                  return done(null,false);
              }
              bcrypt.compare(namePass,tam[k].mat_khau,function (err,rs) {
                  if(rs==false)
                  {
                      return done(null,false);
                  }
                  else {
                      if(tam[k].loai_tai_khoan != 1) {
                          return done(null, false);
                      }
                      else {
                          if(tam[k].khoa==1){ //tài khoản bị khóa
                              return done(null,false);
                          }
                          return done(null,tam[k]);
                      }

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
   secret:'mysecret',
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
