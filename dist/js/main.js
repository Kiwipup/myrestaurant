// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest(); // Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://entree-f18.herokuapp.com/v1/menu/12', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  let item1 = document.getElementById('item1');
  let item2 = document.getElementById('item2');
  let item3 = document.getElementById('item3');
  let item4 = document.getElementById('item4');
  let item5 = document.getElementById('item5');
  let item6 = document.getElementById('item6');
  let item7 = document.getElementById('item7');
  let item8 = document.getElementById('item8');

  if (request.status >= 200 && request.status < 400) {
    item1.textContent = data.menu_items[0].description;
    item2.textContent = data.menu_items[1].description;
    item3.textContent = data.menu_items[2].description;
    item4.textContent = data.menu_items[3].description;
    item5.textContent = data.menu_items[4].description;
    item6.textContent = data.menu_items[5].description;
    item7.textContent = data.menu_items[6].description;
    item8.textContent = data.menu_items[7].description;
  } else {
    console.log('error');
  } // Begin accessing JSON data here

};

request.send();