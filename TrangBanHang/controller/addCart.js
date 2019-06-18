var car=require('../model/cart');

module.exports={
    add: (req,res)=>{
        let id=req.params.idSP;
        console.log(id);
        let list=car.list();
        list.then(row=>{
            let check=0;
            let soLuong;
            for(let i=0;i<row.length;i++){
                if(row[i].idSanPham==id){
                    check=1;
                    soLuong=row[i].soLuong;
                    break;
                }
            }

            if(check==0){
                car.insert(id);
                res.redirect('/cart');
            }
            else {
                car.updateSL(id,soLuong+1);
                res.redirect('/cart');
            }
        })

    },

};
