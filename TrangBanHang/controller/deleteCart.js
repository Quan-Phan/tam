var car=require('../model/cart');

module.exports={
    delete: (req,res)=>{
        let id=req.params.idSP;
        console.log(id);
        car.delete(id);
        res.redirect('/cart');
    },

};
