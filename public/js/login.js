function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3001/auth", false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({"username" : username, "password":password}));

    /*     xhttp.send (JSON.stringify({
        "username": username,
        "password": password
    })); */
    console.log("fungerar!")
}
