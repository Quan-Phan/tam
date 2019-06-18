
var connect_database =require('../dbs/index');

module.exports= {
    checkUsername: (req, res) => {
        let user=req.query.value;
		
        connect_database.query("SELECT COUNT(*) AS SOLUONG FROM member WHERE ten_dang_nhap= '" +user+"'", function (error, rows) {
            if (error) {
                console.log("Do not query");
            } else {
                res.send(rows[0].SOLUONG.toString());				
            }
        });

    }
};