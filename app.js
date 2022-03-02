const express = require("express")
var favicon = require('serve-favicon')
const session = require('express-session');
const mysql = require('mysql');
var path = require('path')
const connection = mysql.createConnection({
	host     : 'localhost:3306',
	user     : 'root',
	password : 'root',
	database : 'filmerDB'
});

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))



app.get('/', function(req, res){

    res.sendFile(__dirname + "/public/login.html")
})




app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})