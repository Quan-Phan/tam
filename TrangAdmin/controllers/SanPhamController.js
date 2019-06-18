var product=require('../models/SanPhamModel');
var add = require('../models/member')
module.exports={
    sanpham :(req,res)=> {
        const data={};
		var subPoster1=product.listProducer();
		var subPoster2=product.listProduct();
		subPoster1.then(rowsl=>{
			data.listProducer=rowsl;
			subPoster2.then(rowsl=>{
				data.listProduct=rowsl;
				res.render('SanPham/index',{title: 'Sản phẩm',data});
			})
		})
    },
    themSanPhamPage :(req,res) => {
        //res.render('themSanPham');
        const data = {};
		var subPoster1=product.listProducer();
		var subPoster2=product.listProduct();
		subPoster1.then(rowsl=>{
			data.listProducer=rowsl;
			subPoster2.then(rowsl=>{
				data.themSanPhamPage=rowsl;
				res.render('SanPham/themSanPham',{data});
			})
		})
    },
    themSanPham :(req,res) => {
		product.themSanPham(req,res);
		res.redirect('/SanPham');
    },
    xoaSanPham :(req,res)=>{
		let id=req.params.id;
		product.xoaSanPham(id);
		res.redirect('/SanPham');
    },
    suaSanPhamPage :(req,res)=>{
        const data={};
        let id=req.params.id;
        
		var subPoster1=product.suaSanPhamPage(id);
		var subPoster2=product.listProducer();
		var subPoster3=product.themSanPhamPage();
		var subPoster4=product.listProduct();
		subPoster1.then(rowsl=>{
			data.suaSanPhamPage=rowsl;
			subPoster2.then(rowsl=>{
				data.listProducer=rowsl;
				subPoster4.then(rowsl=>{
					data.listProduct=rowsl;	
					subPoster3.then(rowsl=>{
						data.themSanPhamPage=rowsl;
						res.render('SanPham/SuaSanPham', {data});
					})
				})
			})
		})		
    },
    suaSanPham :(req,res)=>{
		let id=req.params.id;
		product.suaSanPham(id,req,res);
		res.redirect('/SanPham');
    },
	addImgSP: (req,res)=>{
		let id = req.query.value1;
		var arrImg = req.query.value2;
		var temp =new Array();
		var i=0;
		temp= arrImg.split(",");
		for(i;i<temp.length;i++)
		{
			console.log(id);
			console.log(temp[i]);
			add.addLink(id,temp[i]);
		}
		res.redirect('/SanPham');
    },

	showDetailProduct:(req,res)=>{
    	let id = req.query.value1;
    	var subPoster = add.imgOfProduct(id);
    	subPoster.then(rowsl=>{
			res.json(rowsl);
		})
	},
};
