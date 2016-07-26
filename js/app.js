'use strict';
//Global Variable
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

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
  //Functions
  this.numCustHourly = function() {
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      this.avgCustArray.push(singleHourCust);
    }
  };
  this.cookiesPerCustomer = function() {
    this.numCustHourly();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalCookies += singleHourCookies;
    }
  };
};

//Store locations
var alki = new Store('Alki', 2, 16, 4.6); //eslint-disable-line
var seatac = new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
var seacen = new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
var caphill = new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
var firstandPike = new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line

alki.render = function() {
  var alkiList = document.getElementById('alkiList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    alkiList.appendChild(listElement);
  }
  listElement = document.createElement('li');
  listElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
  alkiList.appendChild(listElement);
};

alki.render();
seatac.render();
seacen.render();
caphill.render();
firstandPike.render();
