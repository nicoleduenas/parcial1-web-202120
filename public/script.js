const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  height = input.value;
  console.log(height)
  getresults(height);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  if(data.length > 0){
    printValues(data);
  }
  else{
    message.innerText = "No matches found";
  }
}

function printValues(data){
  data.forEach((el, index) =>{
      console.log(el)
      let row = table.insertRow(index);
      let id = row.insertCell(0)
      let first_player = row.insertCell(1);
      let second_player = row.insertCell(2);

      id.innerHTML = index+1
      first_player.innerHTML = el.first_player;
      second_player.innerHTML = el.second_player;
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
