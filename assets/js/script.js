// Display today's day and date

var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
console.log(rightNow);
document.getElementById("currentDay").innerHTML = rightNow;

$(document).ready(function() {

    var textAreas = $(".description")
    var hour = moment().hour();
    console.log(textAreas)
    for (var i = 0; i < textAreas.length; i++) {
        var currentTextArea = textAreas[i]
        var currentId = parseInt(currentTextArea.id)
        //if the current hour is LESS THAN the hour represented by the time block, then that time block is FUTURE
        // else if the current hour is greater than the time block then that time block in the Past 
        // else if neither are ture then the time block is in the present 
        if (hour < currentId) {
            $(currentTextArea).addClass("future");
        }
        else if (hour > currentId) {
            $(currentTextArea).addClass("past");
        }
        else {
            $(currentTextArea).addClass("present");
        }
    }
})


// when page is refreshed, save event is remembered 
// localStorage.setItem(time, value);


//function currentDay (){ 
//var rightNow = document.getElementById("currentDay");
//return rightNow;
//
