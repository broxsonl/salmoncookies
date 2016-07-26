'use strict';
//Global Variable
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

// var store = [alki, seatac, firstAndPike, seacenter, capHill]

//Alki store
var alki = {
  //Properties
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};

alki.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
alki.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

alki.render = function() {
  var alkiList = document.getElementById('alkiList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    alkiList.appendChild(listElement);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  alkiList.appendChild(listElement1);
};

alki.render();

var seatac = {
  //Properties
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};
seatac.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
seatac.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

seatac.render = function() {
  var seatacList = document.getElementById('seatacList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    seatacList.appendChild(listElement);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  seatacList.appendChild(listElement1);
};

seatac.render();

var seacen = {
  //Properties
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};
seacen.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
seacen.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

seacen.render = function() {
  var seacenList = document.getElementById('seacenList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement2 = document.createElement('li');
    listElement2.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    seacenList.appendChild(listElement2);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  seacenList.appendChild(listElement2);
};

seacen.render();

var caphill = {
  //Properties
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};
caphill.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
caphill.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

caphill.render = function() {
  var capHillList = document.getElementById('capHillList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement3 = document.createElement('li');
    listElement3.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    capHillList.appendChild(listElement3);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  capHillList.appendChild(listElement1);
};

caphill.render();

var firstandPike = {
  //Properties
  name: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  //Array Properties
  avgCustArray: [],
  cookiesEachHourArray: [],
  totalCookies: 0, //lets us use += later
};
firstandPike.numCustHourly = function() {
  for ( var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.avgCustArray.push(singleHourCust);
  }
},
firstandPike.cookiesPerCustomer = function() {
  this.numCustHourly();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCustArray[i] * this.avgCookie);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalCookies += singleHourCookies;
  }
},

firstandPike.render = function() {
  var firstandPikeList = document.getElementById('firstandPikeList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesEachHourArray.length; i++) {
    var listElement4 = document.createElement('li');
    listElement4.textContent = hours[i] + this.cookiesEachHourArray[i] + ' cookies';
    firstandPikeList.appendChild(listElement4);
  }
  var listElement1 = document.createElement('li');
  listElement1.textContent = 'Total: ' + this.totalCookies + ' cookies';
  firstandPikeList.appendChild(listElement1);
};

firstandPike.render();
