var connect=require('../dbs/index');

module.exports= {
    list: () => {
        let query = "SELECT * FROM producers WHERE checkdelete='"+0+"'";
        return connect.load(query);
    }
};