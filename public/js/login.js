const express = require("express");

const app = express();

app.get("/", (req, res) => {
        res.send()
     })

app.listen(5000, () => {
    console.log("Server online")
})

age()

function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3001/user")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

