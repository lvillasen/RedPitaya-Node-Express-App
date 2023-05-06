/**
 * MYCLIENT.JS
 * an example of a JSON request - an ajax request which returns a JSON object 
 * 
 * When a user browses to http://localhost:3000, index.html is loaded, which then 
 * loads and executes this code
 */

function start(){
var led = document.getElementById("leds").value;
  const Http = new XMLHttpRequest();
  console.log("led="+led)
  const url='http://192.168.1.90:3000/leds/'+led;

if (led==""){const url='http://192.168.1.90:3000/leds/';}

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
}



