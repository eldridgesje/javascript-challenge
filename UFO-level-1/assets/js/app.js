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

  console.log("Button clicked!")

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
 
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filter the data based on the entered date
  var filteredData = tableData.filter(o => o.datetime === inputValue);

  // Connect to the table in the HTML
  var fTable = d3.select(".tData");

  // Clear the table
  fTable.html("");

  //Add a line to the table for each record in the data
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
