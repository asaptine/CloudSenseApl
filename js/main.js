
function addRow(){

  var table = document.getElementById("moviesTable");
  var nRow = document.getElementById("moviesTable").getElementsByTagName('tr');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var inputVal = document.getElementById("movie").value;
  var inputVal2 = document.getElementById("moviePrice").value;
  var rowNumber = nRow.length;

  cell1.innerHTML = rowNumber - 1;
  cell2.innerHTML = inputVal;
  cell3.innerHTML = inputVal2;

}


function suma() {

  let priceCell = document.getElementById('moviePrice').value;
  let rows = document.querySelectorAll("table tr td:last-child");
  let sum = 0;

  for (let i = 0; i < rows.length; i++) {
    sum += Number(rows[i].textContent);
  }

  document.getElementById("suma").textContent = sum + " kn";

}


function bill() {
  var rows = document.querySelectorAll("table tr td:last-child");
  let sum = 0;
  let totalValue = 0;
  let discountValue = 0;
  let priceCell = document.getElementById('moviePrice').value;
  let movie = document.getElementById('movie').value;

  for (let i = 0; i < rows.length; i++)
  {
    sum += Number(rows[i].textContent);
    if(i==2 ){
      discountValue = 0.05*sum;
    }
    totalValue = sum - discountValue;
  }
  document.getElementById("bill").textContent = totalValue + " kn";
  document.getElementById("discount").textContent = "- " + discountValue + " kn";
}



function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("moviesTable");
  switching = true;

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {

        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function clearInput(){
  document.getElementById('moviePrice').value = '' ;
  document.getElementById('movie').value = ''
}
