var aDiv = document.getElementById("app");

age();
/* var aButton = document.createElement('button');
    aButton.innerHTML = 'start';
    aButton.style.margin = "8px";
        aDiv.appendChild(aButton);  */
  
function age(){
    console.log("metoden fungerar");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "js/data.json");

    xhr.onload = function(){
        var data = JSON.parse(this.response)
            createTable(data);
        
    }
    xhr.send();
}

function createTable(data){
    var appElement = document.getElementById("app");
    var aTable = document.createElement("table");
    appElement.appendChild(aTable);
    aTable(createRow);
}

function createRow(name, points){
    var aRow = document.createElement("tr");
    aRow.appendChild(createCell(name));
    aRow.appendChild(createCell(points));
    return aRow;
}

function createCell(content){
    var aCell = document.createElement("td");
    aCell.innerHTML = content;
    return aCell;
    }
