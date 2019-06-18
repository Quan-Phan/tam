var producer_typeP =require('../models/NhaSX-LoaiSPModel');

module.exports ={

    index:(req,res)=>{
        const data={};
		var subPoster1 = producer_typeP.listProducer();
		var subPoster2 = producer_typeP.listCat();
		subPoster1.then(rowsl=>{
			data.list_producer=rowsl;
			subPoster2.then(rowsl=>{
				data.list_category=rowsl;
				res.render('NhaSX_LoaiSP/index', {data});
			})
		})
		
        /*connect_database.query("SELECT * FROM producers", function (error, list_producers) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_producer = list_producers;
                console.log(data.list_producer[1].id);
            }
        });
        connect_database.query("SELECT * FROM categories", function (error, list_categories) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_category = list_categories;
                console.log(data.list_category[0].id);
                res.render('NhaSX_LoaiSP/index', {data});
            }
        });*/
    },
  themNhaSXPage:(req,res)=>{
      res.render('NhaSX_LoaiSP/themNhaSX');
  },
  themNhaSX:(req,res)=>{
      let name=req.body.txtName;
	  producer_typeP.themNhaSX(name);
	  res.redirect('/NhaSX_LoaiSP');
	  /*
      let query ="INSERT INTO producers (name,checkdelete) VALUES ('"+name+"','"+0+"')";
      connect_database.query(query,function (error,result) {
          if(error){
              console.log("Loi");
          }
          console.log('ok');

          res.redirect('/NhaSX_LoaiSP');
          })*/
  },
  xoaNhaSX:(req,res)=>{
      let id=req.params.id;
	  producer_typeP.xoaNhaSX(id);
	   res.redirect('/NhaSX_LoaiSP');
     /* console.log(id);

      let query =" UPDATE `producers` SET `checkdelete`=1 WHERE id='"+id+"'";
      connect_database.query(query, (err, result) => {
          if (err) {
              return res.status(500).send(err);
          }
          res.redirect('/NhaSX_LoaiSP');
      });*/
  },
    suaNhaSXPage:(req,res)=>{
		const data={};
       let id=req.params.id;
	    var subPoster = producer_typeP.suaNhaSXPage(id);
		subPoster.then(rowsl=>{
			data.suaNhaSXPage=rowsl;
			 res.render('NhaSX_LoaiSP/SuaNhaSX',{data})
		})
       /* const data={};
        // let query ="SELECT * FROM products WHERE id = '"+id+"'";
        connect_database.query("SELECT * FROM producers WHERE id = '"+id+"'",function (error,producers) {
            if(error){
                console.log("Loi");
            }
            console.log('ok');
            data.producer=producers;
           res.render('NhaSX_LoaiSP/SuaNhaSX',{data})
        });*/
    },
    suaNhaSX:(req,res)=>{
        let id=req.params.id;
        let name=req.body.txtName;
		producer_typeP.suaNhaSX(id,name);
		 res.redirect('/NhaSX_LoaiSP');
       /* let query =" UPDATE `producers` SET `name`='"+name+"' WHERE id='"+id+"'";
        connect_database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/NhaSX_LoaiSP');
        });*/
    },

    themLoaiSPPage:(req,res)=>{
        res.render('NhaSX_LoaiSP/themLoaiSP');
    },
    themLoaiSP:(req,res)=>{
        let name=req.body.txtName;
		producer_typeP.themLoaiSP(name);
		res.redirect('/NhaSX_LoaiSP');
        /*let query ="INSERT INTO categories (name,checkdelete) VALUES ('"+name+"','"+0+"')";
        connect_database.query(query,function (error,result) {
            if(error){
                console.log("Loi");
            }
            console.log('ok');

            res.redirect('/NhaSX_LoaiSP');
        })*/
    },
    suaLoaiSPPage:(req,res)=>{
        let id=req.params.id;
        const data={};
		var subPoster=producer_typeP.listCatEdit();
		subPoster.then(rowsl=>{
			data.listCatEdit=rowsl;
			 res.render('NhaSX_LoaiSP/SuaLoaiSP',{data})
		})
        // let query ="SELECT * FROM products WHERE id = '"+id+"'";
      /*  connect_database.query("SELECT * FROM categories WHERE id = '"+id+"'",function (error,category) {
            if(error){
                console.log("Loi");
            }
            console.log('ok');
            data.category=category;
            res.render('NhaSX_LoaiSP/SuaLoaiSP',{data})
        });*/
    },
    suaLoaiSP:(req,res)=>{
        let id=req.params.id;
        let name=req.body.txtName;
		producer_typeP.suaLoaiSP(id,name);
		res.redirect('/NhaSX_LoaiSP');
      /*  let query ="UPDATE `categories` SET `name`='"+name+"' WHERE id='"+id+"'";
        connect_database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/NhaSX_LoaiSP');
        });*/
    },
    xoaLoai:(req,res)=>{
        let id=req.params.id;
		producer_typeP.xoaLoai(id);
		 res.redirect('/NhaSX_LoaiSP');
       /* let query ="UPDATE `categories` SET `checkdelete`=1 WHERE id='"+id+"'";
        connect_database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/NhaSX_LoaiSP');
        });*/
    }
};