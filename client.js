
const my_url='http://192.168.1.90:3000/leds/'

function start(){
var led = document.getElementById("leds").value;
  const Http = new XMLHttpRequest();
  console.log("led="+led)
  const url=my_url+led;

if (led==""){const url=my_url;}

Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
  document.getElementById("data_display").innerHTML = Http.responseText;

}
}




