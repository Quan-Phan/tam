//var passport =require('passport');
/* GET home page. */

var express = require('express');
const passport = require('passport');
var router=express.Router();
var index_caronline=require('../controller/index');
var detail_product_controller=require('../controller/detail_product');
var list_product_controller = require('../controller/list_product');
var login =require ('../controller/login');
var sign_up = require('../controller/sign_up');
var my_profile=require('../controller/my_profile');
var take_pass_again=require('../controller/take_pass_again');
var cart = require('../controller/cart');
var addcart=require('../controller/addCart');
var deleteCart=require('../controller/deleteCart');
var verify=require('../controller/veryify_payment');

router.get('/', index_caronline.index);
router.get('/list_products/:idNhaSX/:page',list_product_controller.list_product);
router.get('/detail_product/:id/:pageBL',detail_product_controller.detail_product);
router.post('/detail_product/:id/:pageBL',detail_product_controller.detail_productPost);

router.get('/login',login.loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
router.get('/logout',login.logout);
//router.post('/login',login.loginPost);

router.get('/sign_up',sign_up.sign_upPage);
router.post('/sign_up',sign_up.sign_up);
router.get('/my_profile',my_profile.my_profile);
router.post('/my_profile',my_profile.my_profilePost);

router.get('/take_pass_again',take_pass_again.takePassGet);
router.post('/take_pass_again',take_pass_again.takePassPost);

router.get('/cart',cart.myCart);
router.get('/addCart/:idSP',addcart.add);
router.get('/deleteCart/:idSP',deleteCart.delete);
router.get('/payment',verify.verifyGet);
router.post('/payment',verify.verifyPost);

module.exports = router;


