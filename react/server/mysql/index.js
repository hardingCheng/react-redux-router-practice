const mysql = require("mysql")
//
// let conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'output',
//     password: '123456',
//     database: 'xwclogin',
// })
// function sqlFn(sql,arr,callback) {
//     conn.query(sql, arr, (err, result) => {
//         if (err){
//             console.log(new Error(err))
//             return;
//         }
//         callback&&callback(result)
//     })
// }
//

const pool = mysql.createPool({
    host: 'localhost',
    user: 'output',
    password: '123456',
    database: 'xwclogin',
});
pool.getConnection(function(err, connection) {
    if(err){
        console.log('   mysql-pool connected fail.');
        console.error('   ' + (err.stack || err));
    } else {
        console.log('   mysql-pool connected success.');
    }
});
const  sqlFn=function(sql,arr,callback){
    pool.getConnection(function(err,conn){
        if(err){
            console.log('   mysql-pool connected fail.');
            console.error('   ' + (err.stack || err));
            callback&&callback(err,null);
        }else{
            conn.query(sql,arr,function(err,result){
                conn.release();
                callback&&callback(result)
            });
        }
    });
};
module.exports = sqlFn
