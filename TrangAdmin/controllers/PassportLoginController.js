/*var userC=require('../models/PassportLoginModel');
var LocalStrategy=require('passport-local').Strategy
var bcrypt=require('bcrypt');
module.exports=function(passport){
	passport.serializeUser(function(user,done){
		done(null,user.ten_dang_nhap);
	});
	passport.deserializeUser(function(ten_dang_nhap,done){
		const data={};
		var subPoster = userC.listUser(ten_dang_nhap);
		subPoster.then(rowsl=>{
			data.listUser(ten_dang_nhap)=rowsl;
			done(null,data.listUser[0]);
		})
	});
	passport.use( 'local-login',
				 new LocalStrategy({usernameField:'nameUser', passwordField:'namePass', passReqToCallback:true},
				 function(nameUser,namePass,done){
		const data={};
		var subPoster = userC.listUser(nameUser);
		subPoster.then(rowsl=>{
			data.listUser(nameUser)=rowsl;
			bcrypt.compare(namePass,data.listUser[0].mat_khau,function(err,rsl){
				if(rsl==true){
					return done(null,rsl[0]);
				}
				else{
					return done(null,false);
				}
			})
		})
	})
				 );	
};
var LocalStrategy = require('passport-local').Strategy;

var mysql=require('mysql');
var bcrypt=require('bcrypt');
var db=require('../dbs/connect_database');

module.exports=function (passport) {
    passport.serializeUser(function (user,done) {
        done(null,user.id);
    });
    passport.deserializeUser(function (id,done) {
        db.query("SELECT * FROM member WHERE id=?",[id],function (err,rs) {
            done(err,rs[0]);
        })
    });
    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField:'username',
            passwordField:'password',
            passReqToCallback:true
        },
            function (req,username,password,done) {
            console.log(username);
                db.query("SELECT * FROM member WHERE ten_dang_nhap=?",[username],function (err,row) {
                    if(err){
                        return done(err);
                    }
                    if(!row.length()){
                        return done(null,false,req.flash('loginMessage','No user found'));
                    }
                    console.log(row[0].mat_khau);
                    bcrypt.compare(password,row[0].mat_khau,function (err,rs) {
                        if(rs==true){
                            return done(null,row[0]);
                        }else {
                            return done(null,false,req.flash('loginMessage','wrong password'));
                        }
                    })
                })
            })
    );
};*/