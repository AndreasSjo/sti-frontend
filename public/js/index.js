var aDiv = document.getElementById('app');
var addButton = document.createElement('button');
    addButton.innerHTML = 'add row';
    addButton.onclick = addOnClick;
    addButton.style.margin = "8px";

var aTable = document.createElement('table');
    aTable.style.width = '100%';
    aTable.setAttribute('border', '1');


aDiv.appendChild(aTable);
aDiv.appendChild(addButton);


function addOnClick(){
    var aRow = document.createElement('tr');
            var aText = document.createTextNode("New row");
                aRow.appendChild(aText);
            aTable.appendChild(aRow);
}


