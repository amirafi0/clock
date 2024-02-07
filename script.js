let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');

setInterval(function(){

var date = new Date();
var s = date.getSeconds();
var m = date.getMinutes();
var h = date.getHours();

sec.innerText = s;
min.innerText = m;
hour.innerText = h;

},1000);
