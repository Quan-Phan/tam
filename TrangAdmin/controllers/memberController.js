var member  = require('../models/member');

exports.listMemByUser=function (req,res) {
   const data={};
   let user = req.query.value;

   const subPoster = member.listMemByUser(user);
   subPoster.then(rowsl=>{
       res.json(rowsl);
   })
};
