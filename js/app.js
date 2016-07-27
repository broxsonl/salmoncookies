'use strict';
//Global Variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeLocations = [];//eslint-disable-line

var salmonTable = document.getElementById('salmonTable');
//Header Row Creation function

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

// var store = [alki, seatac, firstAndPike, seacenter, capHill]

function Store(name, minCust, maxCust, avgCookie) {
  //Properties
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  //Arrays
  this.avgCustArray = [];
  this.cookiesEachHourArray = [];
  this.totalCookies = 0;

  storeLocations.push(this);
}

Store.prototype.numCustHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
};

Store.prototype.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
};

Store.prototype.render = function() {
  this.cookiesPerCustomer();
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.cookiesEachHourArray[i];
    trRowName.appendChild(tdCell);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookies;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};


//Store locations
new Store('Alki', 2, 16, 4.6); //eslint-disable-line
new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line

//
//
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
      hourlyTotal = hourlyTotal + storeLocations[j].cookiesEachHourArray[i];
      bigStupidTotal += storeLocations[j].cookiesEachHourArray[i];
      console.log(bigStupidTotal);
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigStupidTotal;
  tableRow.appendChild(tdElement);
};

makeHeaderRow();
renderAllStores();
makeFooterRow();
