var aDiv = document.getElementById('app');
var aButton = document.createElement('button');
    aButton.innerHTML = 'add row';
    aButton.onclick = addOnClick();

var aTable = document.createElement('table');
    aTable.style.width = '100%';
    aTable.setAttribute('border', '1');

        for (var i = 0; i < 3; i++){
            var aRow = document.createElement('tr');
            var aText = document.createTextNode("textrow number: " + i);
                aRow.appendChild(aText);
            aTable.appendChild(aRow);
        }

aDiv.appendChild(aTable);
aDiv.appendChild(aButton);

function addOnClick(){
    var aRow = document.createElement('tr');
            var aText = document.createTextNode("New row");
                aRow.appendChild(aText);
            aTable.appendChild(aRow);
}
