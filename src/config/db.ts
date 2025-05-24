import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

var db: mysql.Connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

db.connect((err) => {
    if (err) {
        console.log("Failed to connect to the database", err);
    }
    console.log("Connected successfully to the database (bien joué bogoss)");
})

export default db;