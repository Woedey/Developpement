const express = require("express");
const mysql = require("mysql2");

const app = express();

const database = mysql.createConnection({
    user: 'root',
    password:'',
    database: 'NL',
    host: 'localhost'
})

database.connect((error)=>{
    if (error){
        throw error
    }
    console.log("connected to database successfully")
})

app.use((req,res)=>{
    res.status(201).json("hellooooo")
});

app.listen(5000, ()=>{
    console.log("welcome to server")
});