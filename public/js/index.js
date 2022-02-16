var mainDiv = document.getElementById('app');

var aContainer = document.createElement('div');
    aContainer.className = "container-md";
        mainDiv.appendChild(aContainer);
        
var aRow = document.createElement('div');
    aRow.className = "row justify-content-md-center";
    aContainer.appendChild(aRow);

var header = document.createElement('div');
    header.innerHTML = "<H1>Filmer</H1>";
    aRow.appendChild(header);

var okBtn = document.createElement('button');
    okBtn.className = "btn btn-success m-3";
    aRow.appendChild(okBtn);

var noBtn  = document.createElement('button');
    noBtn.className = "btn btn-danger m-3";
    aRow.appendChild(noBtn);



