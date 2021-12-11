// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#cityloc");

  // Select the input element and get the raw HTML node
  var inputState = d3.select("#stateloc");

  // Select the input element and get the raw HTML node
  var inputCountry = d3.select("#countryloc");

  // Select the input element and get the raw HTML node
  var inputShape = d3.select("#objectshape");



  // Get the value property of the input element
  var inputValueDate = inputDate.property("value");

  // Get the value property of the input element
  var inputValueCity = inputCity.property("value");

  // Get the value property of the input element
  var inputValueState = inputState.property("value");

  // Get the value property of the input element
  var inputValueCountry = inputCountry.property("value");

  // Get the value property of the input element
  var inputValueShape = inputShape.property("value");

  
  var filteredData = tableData;

  if (inputValueDate === "")
    {}
  
  else {
    filteredData = filteredData.filter(o => o.datetime === inputValueDate);
  }

  if (inputValueCity === "")
    {}
  
  else {
    filteredData = filteredData.filter(o => o.city === inputValueCity);
  }

  if (inputValueState === "")
    {}
  
  else {
    filteredData = filteredData.filter(o => o.state === inputValueState);
  }

  if (inputValueCountry === "")
    {}
  
  else {
    filteredData = filteredData.filter(o => o.country === inputValueCountry);
  }

  if (inputValueShape === "")
    {}
  
  else {
    filteredData = filteredData.filter(o => o.shape === inputValueShape);
  }


  console.log(filteredData);

  var fTable = d3.select(".tData");

  fTable.html("");

  filteredData.forEach(function(date) {
 
    fTable.append("tr").html(`<td>${date.datetime}</th>
    <td>${date.city}</th>
    <td>${date.state}</th>
    <td>${date.country}</th>
    <td>${date.shape}</th>
    <td>${date.duration}</th>
    <td>${date.comments}</th>`)
  });
 

};
