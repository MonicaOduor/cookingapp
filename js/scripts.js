var multiply = function(gallons) {
  return(gallons*3.78541);
}
var gallons= parseFloat(prompt("Enter quantity in gallons"));
var result = multiply(gallons);
alert("The quantity in litres is " + result + ".");
