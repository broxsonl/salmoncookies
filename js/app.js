'use strict';

//Global Variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeLocations = [];

var salmonTable = document.getElementById('salmonTable');
var salesInput = document.getElementById('salesInput');
// var clearTable = document.getElementById('submit');

//Store constructor
function Store(name, minCustomers, maxCustomers, avgCookies) {
  //Properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  //Arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  //Methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  //Push the created instance to the storeLocations array
  storeLocations.push(this);
};
Store.prototype.render = function() {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.averageCookiesPerHour.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};
Store.prototype.numOfCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};
Store.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

//Store Object Declarations
new Store('Alki', 2, 16, 4.6); //eslint-disable-line
new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line

//Store method to calculate input for our arrays.


//Table creation functions
function makeHeaderRow() { //eslint-disable-line
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
    // console.log(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
};
function renderAllStores() {
  for (var i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
};
function makeFooterRow() { //eslint-disable-line
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);
  var bigStupidTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      bigStupidTotal += storeLocations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigStupidTotal;
  tableRow.appendChild(tdElement);
}

//Event Handler function
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
//If statement to prevent empty text fields
  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  var name = event.target.name.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseInt(event.target.avgCookies.value);

  var newStore = new Store(name, minCustomers, maxCustomers, avgCookies);
  // for (var i = 0; i < storeLocations.length; i++) {
  //   if (storeLocations[i].name === event.target.name.value) {
  //     storeLocations[i].minCustomers = parseInt(event.target.minCustomers.value);
  //     storeLocations[i].maxCustomers = parseInt(event.target.maxCustomers.value);
  //     storeLocations[i].avgCookies = parseFloat(event.target.avgCookies.value);
  //     storeLocations[i].averageCustomersPerHour = [];
  //     storeLocations[i].averageCookiesPerHour = [];
  //     storeLocations[i].numOfCustomersPerHour;
  //     storeLocations[i].cookiesPerCustomer;
  //   }
  // }

//Clears the rendered table from the page.
  function clearTable() {
    salmonTable.innerHTML = '';
  };
  clearTable();


//Code to make the input fields blank after user submits
  event.target.name.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookies.value = null;

//Re-creating our table with the new user inputs
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}


makeHeaderRow();
renderAllStores();
makeFooterRow();

salesInput.addEventListener('submit', dataInput);
