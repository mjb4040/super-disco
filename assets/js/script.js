// Display today's day and date

var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);
document.getElementById("currentDay").innerHTML = rightNow;

//function currentDay (){ 
//var rightNow = document.getElementById("currentDay");
//return rightNow;
// }

