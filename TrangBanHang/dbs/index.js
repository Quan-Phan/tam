var mysql = require("mysql")
var createConnection = ()=> {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "quanly_car_online",
    });
};

module.exports = {
    load: sql =>{
        return new Promise((resolve, reject)=>{
            var connection = createConnection();
            connection.query(sql, (err, result, fields) => {
                if (err)
                    reject(err);
                else{
                    resolve(result);
                }
                connection.end();
            });
        })
    },

    // add: (tableName, entity) => {
    //     return new Promise((resolve, reject)=>{
    //         var connection = createConnection();
    //         var sql = `insert into ${tableName} set ?`;
    //         connection.query(sql, entity, (err, value) => {
    //             if (err)
    //                 reject(err);
    //             else{
    //                 resolve(value.insertId);
    //             }
    //             connection.end();
    //         });
    //     })
    // },
    // delete: (tableName, idField, id) => {
    //     return new Promise((resolve, reject)=>{
    //         var connection = createConnection();
    //         var sql = `delete from ${tableName} where ${idField} = ?`;
    //         connection.query(sql, id, (err, value) => {
    //             if (err)
    //                 reject(err);
    //             else{
    //                 resolve(value);
    //             }
    //             connection.end();
    //         })
    //     });
    // },
    // update:  (tableName, entity, idField) => {
    //     return new Promise((resolve, reject)=>{
    //         var connection = createConnection();
    //         var id = entity[idField];
    //         delete entity[idField];
    //         var sql = `update ${tableName} set ? where ${idField} = ?`;
    //         connection.query(sql, [entity, id], (err, value) => {
    //             if (err)
    //                 reject(err);
    //             else{
    //                 resolve(value);
    //             }
    //             connection.end();
    //         });
    //     })
    // },
    // updateWhenHavePrimaryFields:  (tableName, entity, idFields) => {
    //     return new Promise((resolve, reject)=>{
    //         var connection = createConnection();
    //         var sql = `update ${tableName} set ? where `;
    //         var primakeyFieldsValue = [];
    //         for (i = 0; i < idFields.length; i++){
    //             if (i != 0)
    //                 sql += ' and ';
    //             sql += `${idFields[i]} = ? `;
    //             primakeyFieldsValue.push(entity[idFields[i]]);
    //             delete entity[idFields[i]];
    //         }
    //
    //         var params = [entity];
    //         for (i = 0; i < idFields.length; i++) {
    //             params.push(primakeyFieldsValue[i]);
    //         }
    //
    //         connection.query(sql, params, (err, value) => {
    //             if (err)
    //                 reject(err);
    //             else{
    //                 resolve(value);
    //             }
    //             connection.end();
    //         });
    //     })
    // }
};