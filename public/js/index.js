
var mainDiv = document.getElementById('app');
   // mainDiv.style.border = "thick solid BLUE";
    mainDiv.className = "d-flex flex-column";

var headerRow = document.createElement('div');
    headerRow.className = "row justify-content-center mt-0";
    //headerRow.style.border = "thick solid RED";
    mainDiv.appendChild(headerRow); 

var header = document.createElement('div');
    header.className ="h1";
    header.innerHTML = "Filmer";
    header.id = "headerMain";
    headerRow.appendChild(header);

 var imgRow = document.createElement('div');
    imgRow.className = "row justify-content-center mt-5 mb-5";
    imgRow.style.border = "thick solid BLUE";
    mainDiv.appendChild(imgRow); 

/* var imgJaws = document.createElement('img');
    imgJaws.src = "/images/JAWS.jpg";
    imgJaws.style.width ="400px";
    imgJaws.style.height ="500px";
    imgJaws.className = "rounded";
    imgJaws.id = 'movieImg'
    imgRow.appendChild(imgJaws);  */

var cardContainerDiv = document.createElement('div');
    cardContainerDiv.className = "cardcontainer list";

    
var cardUl = document.createElement('ul');
    cardUl.className = 'list-group list-unstyled';
    /* cardUl.style.listStyle = "type none"; */
    cardUl.id = "cardlist";

    cardContainerDiv.appendChild(cardUl); 
    imgRow.appendChild(cardContainerDiv);

var buttonRow = document.createElement('div');
    buttonRow.className = "row justify-content-center ";
    //buttonRow.style.border = "thick solid BLACK";
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
    okBtn.onclick = okOnClick;

var okBtnIco = document.createElement('i');
    okBtnIco.className="fa fa-regular fa-check"
    
    okBtn.appendChild(okBtnIco);
    okBtn.id = 'okBtn';
    buttonRow.appendChild(okBtn);
    age();

function okOnClick(){

}

 function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createCardsList(data)
    }
    xhr.send()
}

function createCardsList(data){
    var cardRow = document.createElement('div');
    cardRow.className = "row justify-content-center mt-5 mb-5";
    //imgRow.style.border = "thick solid BLUE";
    mainDiv.appendChild(cardRow);
    document.getElementById("cardlist").appendChild(createCards(data[0].title, data[0].description, data[0].imageurl));
    document.getElementById("cardlist").appendChild(createCards(data[1].title, data[1].description, data[1].imageurl));
    document.getElementById("cardlist").appendChild(createCards(data[2].title, data[2].description, data[2].imageurl));
    document.getElementById("cardlist").appendChild(createCards(data[3].title, data[3].description, data[3].imageurl));
} 
 function createCards(title, description, imageurl){
    var cardLi = document.createElement('li');
    var cardDiv = document.createElement('div');
    cardDiv.className ="flex-column rounded mh-100 mw-100";
    cardDiv.style.width="400px"; 
    cardDiv.style.height="500px";  
    cardDiv.style.backgroundImage = "url("+imageurl+")";
      cardDiv.style.backgroundSize = "400px 500px";  

    var cardHeaderRow = document.createElement('div');
        cardHeaderRow.className = "row justify-content-flex-start";
        cardDiv.appendChild(cardHeaderRow);

    var titleHeader = document.createElement('div');
        titleHeader.className ="h1 col-12 mx-2";
        titleHeader.innerHTML = title;
        cardHeaderRow.appendChild(titleHeader);
    
    var cardDescRow = document.createElement('div');
        cardDescRow.className = "row justify-content-flex-start";
        cardDiv.appendChild(cardDescRow);

    var filmDesc = document.createElement('div');
        filmDesc.className = "col-12 mx-1";
    var filmDescP = document.createElement("p");
        filmDescP.className = 'font-weight-bold';
    var node = document.createTextNode(description);
        filmDescP.appendChild(node);
        filmDesc.className = "col-12 mx-1";
        filmDesc.appendChild(filmDescP)
        /* filmDesc.innerHTML = description;  */
        cardDescRow.appendChild(filmDesc);
    
    cardLi.appendChild(cardDiv);
    cardUl.appendChild(cardLi);
    return cardLi;
} 