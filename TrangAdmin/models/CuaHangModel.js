
var connect_database=require('../dbs/connect_database');

module.exports={
   /* list :(req,res) =>{
        //const data={};
        connect_database.query("SELECT * FROM shops",function (error,list_shop) {
            if(error){
                console.log("Do not query");
            }
            else {
                console.log("Successful");
                return list_shop;
                //res.send(res.setAttribute("list",list_product));
            }
        });
    },*/
	listStore:()=>{
		var query="SELECT * FROM shops";
		return connect_database.load(query);
	}
	

};