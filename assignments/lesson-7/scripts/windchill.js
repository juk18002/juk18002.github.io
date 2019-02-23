// The formula to calculate the wind chill factor is LaTeX: 
// f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16} 
// f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , 
// where 
//       f is the wind chill factor in Fahrenheit, 
//       t is the air average temperature in Fahrenheit, and 
//       s is the wind speed in miles per hour.

// Input - get input and convert that string to an integer
let t = parseInt(document.getElementById("currentTemp").innerHTML);
let s = parseInt(document.getElementById('windSpeed').innerHTML);

// Processing - some random formula processing with the variable
let f = 35.74 + (0.6215*t) - (35.75*(s**0.16)) + (0.427*(t*(s**0.16)));

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById('windChill').innerHTML = f.toFixed(0);
