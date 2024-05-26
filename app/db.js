const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:'testuser',
    password:'password',
    database:"dbname",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

db.connect(err =>{
    if(err){
        console.log("Error connecting to MySQL database:", err)

    }else{
        console.log("Connected to MySQL database");
    }
})

module.exports = db;
