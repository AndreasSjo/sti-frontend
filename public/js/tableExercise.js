var aDiv = document.getElementById('app');
var btnDiv = document.createElement('div');
    btnDiv.setAttribute("id", "btnDiv");
    btnDiv.style.flex="flex-direction: row";

var addButton = document.createElement('button');
    addButton.innerHTML = 'add row';
    addButton.onclick = addOnClick;
    addButton.style.margin = "8px";
        btnDiv.appendChild(addButton);

var delButton = document.createElement('button');
    delButton.innerHTML = 'delete row';
    delButton.onclick = delOnClick;
    delButton.style.margin = "8px";
    btnDiv.appendChild(delButton);

var aTable = document.createElement('table');
    aTable.setAttribute("id", "aTable");
    //aTable.style.width = '50%';
    aTable.setAttribute('border', '1');


aDiv.appendChild(aTable);
aDiv.appendChild(btnDiv);

var rowCount = 0;

function addOnClick(){
    var aRow = document.createElement('tr');
        aRow.setAttribute("id", "row"+rowCount);
            var aText = document.createTextNode("New row");
                aRow.appendChild(aText);
            aTable.appendChild(aRow);
}

function delOnClick(){
    document.getElementById("aTable").deleteRow(0);

}
