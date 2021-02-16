const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"task"
});


connection.connect();


export const showTask = connection.query("SELECT * FROM task",(err, result, fields) =>> {
    if(err) throw err;
    console.log(result[0].solution);
})