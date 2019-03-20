var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var numMonth = new Array(12);
numMonth[0] = "January";
numMonth[1] = "February";
numMonth[2] = "March";
numMonth[3] = "April";
numMonth[4] = "May";
numMonth[5] = "June";
numMonth[6] = "July";
numMonth[7] = "August";
numMonth[8] = "September";
numMonth[9] = "October";
numMonth[10] = "November";
numMonth[11] = "December";

// format: Monday, 6 April 2020

var todayText = weekday[d.getDay()] + ", " + d.getDate() + " " + numMonth[d.getMonth()] + " " + d.getFullYear();
var footerText = "&copy; " + weekday[d.getDay()] + ", " + d.getDate() + " " + numMonth[d.getMonth()] + " " + d.getFullYear() + " BYUI - David Jukes";

//days[dt.getDay()] + ", " + dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear();

document.getElementById("currentDate").innerHTML = footerText;


document.getElementById("todayText").innerHTML=todayText;