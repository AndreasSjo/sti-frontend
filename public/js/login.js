var jwt = localStorage.getItem("jwt");
if (jwt != null) {
    window.location.href = './index.html'
}

function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/users.json")
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "username": username,
        "password": password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if (objects['status'] == 'ok') {
                localStorage.setItem("jwt", objects['accessToken']);
                Swal.fire({                             /*Swal används för att göra pop-up vid login  */
                    text: objects['message'],
                    icon: 'success',
                    confirmButtonText: 'Okej!'
                }).then((result) => {
                    if(result.isConfirmed) {
                        window.location.href ='./index.html';
                    }
                }); 
            } else {
                Swal.fire({
                    text: objects['message'],
                    icon: 'error',
                    confirmButtonText: 'Okej!'
                });
            }
        }
    };
    return false;
}


/* const express = require("express");

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

 */