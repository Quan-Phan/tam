var connect_database=require('../dbs/connect_database');

module.exports={
	ngay:(date)=>{
		var query="SELECT HD.tenSpDaMua, HD.thanhtoan\n" +
			"FROM (SELECT t1.idHoaDon, t1.tenSpDaMua,t2.ngaydathang,t2.thanhtoan\n" +
			"\t\tFROM idspsell t1 join orders t2 on t1.idHoaDon=t2.id) AS HD\n" +
			"WHERE HD.ngaydathang='"+date+"'";
		return connect_database.load(query);
	},
	thang:(ngay1,ngay2)=>{
		var query="SELECT HD.tenSpDaMua, HD.thanhtoan\n" +
			"\t\t\tFROM (SELECT t1.idHoaDon, t1.tenSpDaMua,t2.ngaydathang,t2.thanhtoan\n" +
			"\t\t\tFROM idspsell t1 join orders t2 on t1.idHoaDon=t2.id) AS HD\n" +
			"WHERE HD.ngaydathang>='"+ngay1+"' && HD.ngaydathang<'"+ngay2+"'";
		return connect_database.load(query);
	}
};