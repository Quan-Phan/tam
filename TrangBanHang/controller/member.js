var member=require('../model/member');
var bcrypt=require('bcrypt');

module.exports= {
    veryfy: (username,password)=>{
        const data={};
        let user=member.get(username);
        user.then(row=>{
            if(row.mat_khau==password){
                return row[0];
            }
        });
        return undefined;
    },
    get:(ten_dang_nhap,res)=>{
        const data={};
        let user=member.get(ten_dang_nhap);
        user.then(row=>{
            data.member1=row;
            res.send(data);
        });

    },
    check:(ten_dang_nhap)=>{
        let user=member.get(ten_dang_nhap);
        user.then(row=>{
            if(!row){
                return false;
            }
        });
        return true;
    },
    validPassword : (email, password) => {
        // const hash = bcrypt.hash(password, SALT_ROUNDS);
        let user = member.get(email);
        user.then(row=>{
            if (!row)
                return false;
            console.log(row);
           // return bcrypt.compare(password, row.mat_khau);
        });

    }

};