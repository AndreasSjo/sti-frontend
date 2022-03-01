// TODO personId should be logged in user
const personId = '1';



var mainDiv = document.getElementById('app');
    
   // mainDiv.style.border = "thick solid BLUE";
    mainDiv.className = "d-flex flex-column";

var headerRow = document.createElement('div');
    headerRow.className = "row justify-content-center mt-3";
    //headerRow.style.border = "thick solid RED";
    mainDiv.appendChild(headerRow); 

var header = document.createElement('div');
    header.className ="h1";
    header.innerHTML = "Filmer";
    header.id = "headerMain";
    headerRow.appendChild(header);

 var imgRow = document.createElement('div');
    imgRow.id = "cardDivRow"
    imgRow.className = "row justify-content-center mt-5 mb-5";
    //imgRow.style.border = "thick solid BLUE";
    mainDiv.appendChild(imgRow); 

var cardContainerDiv = document.createElement('div');
    cardContainerDiv.className = "cardcontainer list";

    
var cardUl = document.createElement('ul');
    cardUl.className = 'list-group list-unstyled';
    cardUl.id = "cardlist";

    cardContainerDiv.appendChild(cardUl); 
    imgRow.appendChild(cardContainerDiv);

var buttonRow = document.createElement('div');
    buttonRow.id = "buttonRow";
    buttonRow.className = "row justify-content-center ";
    //buttonRow.style.border = "thick solid BLACK";
    mainDiv.appendChild(buttonRow); 




var noBtn  = document.createElement('button');
    noBtn.addEventListener('click', animatecard);
    noBtn.className = "btn btn-lg btn-danger m-3 rounded-circle";

var noBtnIco = document.createElement('i');
    noBtnIco.className="fa fa-regular fa-times"
    noBtn.appendChild(noBtnIco);
    noBtn.id = 'but-no';
    buttonRow.appendChild(noBtn); 

var maybeBtn  = document.createElement('button');
    maybeBtn.className = "btn btn-lg btn-warning m-3 rounded-circle";

var maybeBtnIco = document.createElement('i');
    maybeBtnIco.className="fa fa-thin fa-meh"

    maybeBtn.appendChild(maybeBtnIco);
    maybeBtn.id = 'but-maybe';
    buttonRow.appendChild(maybeBtn); 

var okBtn = document.createElement('button');
    okBtn.addEventListener('click', animatecard);
    okBtn.className = "btn btn-lg btn-success m-3 rounded-circle";
    okBtn.id = 'but-ok'

var okBtnIco = document.createElement('i');
    okBtnIco.className="fa fa-regular fa-check"
    
    okBtn.appendChild(okBtnIco);
    buttonRow.appendChild(okBtn);
    age();

  function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3001/movies")
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
        if (title == "Jaws") {
            cardLi.className = "card-current";

        } else {
            cardLi.className = "card";
            
        }
        
        cardLi.style.transformOrigin = "50% 99%";

    var cardDiv = document.createElement('div');
        cardDiv.id = "cardDIV";
        cardDiv.className ="d-flex align-content-end flex-wrap rounded mh-100 mw-100";
        cardDiv.style.width="400px"; 
        cardDiv.style.height="500px";  
        cardDiv.style.backgroundImage = "url("+imageurl+")";
        cardDiv.style.backgroundSize = "400px 500px";  

    var cardHeaderRow = document.createElement('div');
        cardHeaderRow.className = "row justify-content-flex-start";
            cardDiv.appendChild(cardHeaderRow);

    var titleHeader = document.createElement('div');
        titleHeader.id = "titleHeader";
        titleHeader.className ="h1 col-12 mx-2 text-white";
        titleHeader.innerHTML = title;
            cardHeaderRow.appendChild(titleHeader);
    
    var cardDescRow = document.createElement('div');
        cardDescRow.className = "row justify-content-flex-start";
            cardDiv.appendChild(cardDescRow);

    var filmDesc = document.createElement('div');
        filmDesc.className = "col-12 mx-1";

    var filmDescP = document.createElement("p");
        filmDescP.className = 'font-weight-bold text-white';

    var node = document.createTextNode(description);
        filmDescP.appendChild(node);
        filmDesc.appendChild(filmDescP)
        cardDescRow.appendChild(filmDesc);
    
    cardLi.appendChild(cardDiv);
    cardUl.appendChild(cardLi);
    return cardLi;
} 


 function animatecard(ev) {
    var t = ev.target;
    if (t.id === 'but-no') {
        cardDivRow.classList.add('nope');
        // If button no is pressed get the current-card title
        const curCard = cardDivRow.getElementsByClassName('card-current');
        var thisTitle = document.getElementById('titleHeader').innerHTML;
        // Pass the title, personid and rating (1 = ok, 2 = maybe, 3 = no) to update json file
        updateRatings(thisTitle, personId, '3');
        console.log(thisTitle);

    }
    if (t.id === 'but-ok') {
        cardDivRow.classList.add('yes');
        // If button ok is pressed get the current-card title
        const curCard = cardDivRow.getElementsByClassName('card-current');
        var thisTitle = document.getElementById('titleHeader').innerHTML;
        // Pass the title, personid and rating (1 = ok, 2 = maybe, 3 = no) to update json file
        updateRatings(thisTitle, personId, '1');
        console.log(thisTitle);
        
    }
  }
  
 
  function animationdone(ev) {

    // get the container
    var origin = document.getElementById("cardDivRow");
   
    // remove the appropriate class
    // depending on the animation name
    if (ev.animationName === 'yay') {
      origin.classList.remove('yes');
    }
    if (ev.animationName === 'nope') {
      origin.classList.remove('nope');
    }
   
    // if any of the card events have 
    // ended
    if (ev.animationName === 'nope' ||
        ev.animationName === 'yay') {
   
    // remove the first card in the element
      origin.querySelector('.card-current').remove();
   
    // if there are no cards left showSummary
      if (!origin.querySelector('.card')) {
          mainDiv.removeChild(cardDivRow);
          mainDiv.removeChild(buttonRow);
        showSummary();
      } else {
   
    // otherwise shift the 'current' class to 
    // the next card 
        origin.querySelector('.card').classList.replace('card','card-current');
      }
    }
  }
  document.getElementById('app').addEventListener(
    'animationend', animationdone
  ); 

  function updateRatings(title, userId, rating){
    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "http://localhost:3001/ratings");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ 
    "title": title, "userId": userId, "rating": rating 
  }));
  }

  function showSummary(){
    var tableDiv = document.createElement('div');
    tableDiv.className ="d-flex justify-content-center rounded mh-100 mw-100";
   var aTable = document.createElement('table');
   aTable.className = "table table-bordered"
   aTable.id = "aTable";
   aTable.className = "text-danger bg-dark";
   aTable.style.width="50vh"; 
   aTable.style.height="50vh"; 

   var tableHeader = document.createElement('thead');
   var tableRow1 = document.createElement('tr');
   var thMovies = document.createElement('th');
        thMovies.className = "col";
    tableRow1.appendChild(thMovies);
    tableHeader.appendChild(tableRow1);
    aTable.appendChild(tableHeader);

    var tableBody = document.createElement('tbody');
    
    aTable.appendChild(tableBody);
    tableDiv.appendChild(aTable);

    mainDiv.appendChild(tableDiv);

/***********Retriving ratings ********************/
/*     var xhrRating = new XMLHttpRequest()
    xhrRating.open("GET", "http://localhost:3001/ratings")
    xhrRating.onload = function(){
        var ratings = JSON.parse(this.response)
        for (let i = 0; i < userData.length; i++){
            var curUser = userData[i].id;
            for (let j = 0; j < ratings.length; j++){
                if(ratings[j].userId === curUser){
                  var rating = ratings[j].rating;
                  document.getElementById(ratings[i].title).appendChild('3') 
                }
            }
        }
    }
    xhrRating.send() */

/***********Retriving movie titles ********************/
    var xhrMovies = new XMLHttpRequest()
    xhrMovies.open("GET", "http://localhost:3001/movies")
    xhrMovies.onload = function(){
        var moviesData = JSON.parse(this.response)
        for (let i = 0; i < moviesData.length; i++){
                var thTitle = document.createElement('th');
                thTitle.className = "col";
                thTitle.innerHTML = moviesData[i].title;
                tableRow1.appendChild(thTitle);
        }
    }
    xhrMovies.send()

/***********Retriving usernames ********************/
    var xhr = new XMLHttpRequest()
    
        xhr.open("GET", "http://localhost:3001/users")
        xhr.onload = function(){
            var userData = JSON.parse(this.response);
            for (let i = 0; i < 4; i++) {
 
            var tRow = document.createElement('tr');
            tRow.id = userData[i].username;
            var tHead = document.createElement('th');
                tHead.innerHTML = userData[i].username;
                    tRow.appendChild(tHead);
                tableBody.appendChild(tRow);

            }
            var xhrRating = new XMLHttpRequest()
            xhrRating.open("GET", "http://localhost:3001/ratings")
            xhrRating.onload = function(){
                var ratings = JSON.parse(this.response)

                for (let i = 0; i < userData.length; i++){
                    var curUser = userData[i].id;
                      
                    for (let j = 0; j < ratings.length; j++){
                        
                        if(ratings[j].userId = curUser){
                          var thisRating = ratings[j].rating;
                          console.log(ratings[j].userId);
                          console.log(ratings[j].title);
                          var aTd = document.createElement('td');
                            aTd.innerHTML = ratings[j].rating;
                         var rowInsertInto = document.getElementById(userData[i].username);
                            rowInsertInto.appendChild(aTd);
                        }

                    }
                }
            }
            xhrRating.send()
        }
    xhr.send()  
    


}    
