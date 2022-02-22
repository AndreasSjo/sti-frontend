
var mainDiv = document.getElementById('app');
    mainDiv.style.border = "thick solid BLUE";
    mainDiv.className = "d-flex flex-column";

var headerRow = document.createElement('div');
    headerRow.className = "row justify-content-center mt-0";
    headerRow.style.border = "thick solid RED";
    mainDiv.appendChild(headerRow); 

var header = document.createElement('div');
    header.className ="h1";
    header.innerHTML = "Filmer";
    header.id = "headerMain";
    headerRow.appendChild(header);

 var imgRow = document.createElement('div');
    imgRow.className = "row justify-content-center mt-5 mb-5";
    imgRow.style.border = "thick solid BLUE";
    /* imgRow.style.background = {{json.imageurl}} */
    mainDiv.appendChild(imgRow); 


var cardContainerDiv = document.createElement('div');
    cardContainerDiv.className = "cardcontainer";
    cardContainerDiv.style.width ="400px";
    cardContainerDiv.style.height ="500px";
    /* cardContainerDiv.style.background = "data.imageurl"; */


    imgRow.appendChild(cardContainerDiv);

var buttonRow = document.createElement('div');
    buttonRow.className = "row justify-content-center ";
    buttonRow.style.border = "thick solid BLACK";
    mainDiv.appendChild(buttonRow); 



var noBtn  = document.createElement('button');
    noBtn.className = "btn btn-lg btn-danger m-3 rounded-circle";

var noBtnIco = document.createElement('i');
    noBtnIco.className="fa fa-regular fa-times"

    noBtn.appendChild(noBtnIco);
    noBtn.id = 'noBtn';
    buttonRow.appendChild(noBtn); 

var maybeBtn  = document.createElement('button');
    maybeBtn.className = "btn btn-lg btn-warning m-3 rounded-circle";

var maybeBtnIco = document.createElement('i');
    maybeBtnIco.className="fa fa-thin fa-meh"

    maybeBtn.appendChild(maybeBtnIco);
    maybeBtn.id = 'maybeBtn';
    buttonRow.appendChild(maybeBtn); 

var okBtn = document.createElement('button');
    okBtn.className = "btn btn-lg btn-success m-3 rounded-circle";

var okBtnIco = document.createElement('i');
    okBtnIco.className="fa fa-regular fa-check"
    
    okBtn.appendChild(okBtnIco);
    okBtn.id = 'okBtn';
    buttonRow.appendChild(okBtn);


/* 

new Vue({
        el: '#app',
        data() {
            return{
                json: null
            }
            
        },
        created: function () {
          fetch("/data.json")
            .then(r => r.json())
            .then(json => {
              this.json=json;
            });
        }
    }); */

var testDiv = document.getElementById("app");
age();

function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        testDiv.innerHTML = data[1].name;

    }
    xhr.send()
}
 
