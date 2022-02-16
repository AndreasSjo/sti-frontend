var mainDiv = document.getElementById('app');

var aContainer = document.createElement('div');
    aContainer.className = "container-md";
    aContainer.style.border = "thick solid #0000FF";
        mainDiv.appendChild(aContainer);
       
var aRow = document.createElement('div');
    aRow.className = "row-md justify-content-md-center";
    aRow.style.border = "thick solid #FF3333";
    aContainer.appendChild(aRow);

var header = document.createElement('div');
    header.innerHTML = "<H1>Filmer</H1>";
    aRow.appendChild(header);

var imgJaws = document.createElement('img');
    imgJaws.src = "/images/JAWS.jpg";
    imgJaws.style.width ="100px";
    imgJaws.style.height ="150px";
    aRow.appendChild(imgJaws);

var aColumn = document.createElement('div')
    aColumn.className = "column"
var okBtn = document.createElement('button');
    okBtn.className = "btn btn-success m-3";
    aRow.appendChild(okBtn);

var noBtn  = document.createElement('button');
    noBtn.className = "btn btn-danger m-3";
    aRow.appendChild(noBtn);



