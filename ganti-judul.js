var i = 0, ti=0,  p3=new Array(), si=0, p1=new Array(), slides = new Array(); 
slides[0] = "MELAYANI KEBUTUHAN"; 
slides[1] = "Dimana selalu ada SOLUSI untuk"; 
slides[2] = "Siap MELAYANI KEBUTUHAN"; 
slides[3] = "Selalu Siap MELAYANI KEBUTUHAN"; 
slides[4] = "Siap Memberikan SOLUSI untuk KEBUTUHAN"; 
  
p3[0] = "Pelanggan ANDA"; 
p3[1] = "Proyek Anda"; 
p3[2] = "User ANDA"; 
p3[3] = "Customer Anda"; 
p3[4] = "ANDA";

p1[0] = ""; 
p1[1] = "JAYASTEEL";
p1[2] = "Jayasteel";
  
		var currentSlide = 0;
		var slideInterval = setInterval(nextSlide,3000);
var tigaInterval = setInterval(tiga,4000); 
var satuInterval = setInterval(satu,6000); 

function nextSlide(){
currentSlide = (currentSlide+1)%slides.length;
var dua=document.getElementById("dua");
dua.innerHTML = slides[currentSlide];
dua.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 40%)`;
}
function tiga(){
ti = (ti+1)%p3.length;
var tiga = document.getElementById("tiga");
tiga.innerHTML = p3[ti];
var h = Math.floor(360*Math.random());
tiga.style.color = `hsl(${h}deg, 50%, 20%)`;
}
function satu(){
si = (si+1)%p1.length;
var satu=document.getElementById("satu");
satu.innerHTML = p1[si];
var h = Math.floor(360*Math.random());
satu.style.color = `hsl(${h}deg, 50%, 30%)`;
}
