//var comment =require('../model/comment');

module.exports={
    loginGet: (req,res)=>{
        const user=req.user;
        const signOut="Log out";
        const message=undefined;
        res.render('login',{user,signOut,message});
    },
    logout:(req,res)=>{
        req.logout();
        res.redirect('/login');
    }
};
