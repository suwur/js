document.getElementById("desk").innerHTML = "<br><br>Besi beton atau baja tulangan (dalam bahasa Inggris disebut reinforcing bar disingkat rebar atau roundbar). Ada juga yang menyebut dengan nama besi bulat, besi cor, besi betoneser, beton neser, besi batangan. dikenal ketika dipadatkan sebagai baja tulangan,[1] adalah batang baja yang berbentuk menyerupai jala baja yang digunakan sebagai alat penekan pada beton bertulang dan struktur batu bertulang untuk memperkuat dan membantu beton di bawah tekanan.<br><br>Beton lebih kuat ketika mendapat beban tekan, namun kekuatan tariknya lemah. Besi beton meningkatkan kekuatan tarik struktur secara signifikan. Besi beton ulir dibentuk untuk memberikan ikatan yang lebih baik dengan beton.<br><br>Besi beton di pasaran ada 2 jenis, yakni baja tulangan polos biasa diberi kode BjTP dan baja tulangan sirip dengan kode BjTS. Untuk industri baja Indonesia diatur dalam SNI 07-2052-2002. Standar  Nasional  Indonesia  (SNI)  07-2052-1997 mengenai Baja  tulangan  beton  dibuat dalam rangka upaya mempersempit peluang adanya produk Baja tulangan beton non standar yang dikenal dengan istilah besi beton banci.<br><br>Angka yang terdapat pada kode tulangan menyatakan batas kuat leleh/ulur. Baja beton BJTP 24 dimaksudkan sebagai baja beton polos dengan batas ulur 24 kg/mm2, dan baja beton BJTD 40 adalah tulangan beton dengan kuat leleh 40 Kn/cm2.<br><br>";
var i = 0, des=0,ti=0, b3=new Array(),w3=new Array(),p3=new Array(), si=0,di=0,bi=0,p1=new Array(), slides = new Array();
slides[0] = "MELAYANI KEBUTUHAN";
slides[1] = "Dimana selalu ada SOLUSI untuk";
slides[2] = "Siap MELAYANI KEBUTUHAN";
slides[3] = "Selalu Siap MELAYANI KEBUTUHAN";
slides[4] = "Siap Memberikan SOLUSI untuk ";
  
p3[0] = "Pelanggan ANDA";
p3[1] = "Proyek Anda";
p3[2] = "User ANDA";
p3[3] = "Customer Anda";
p3[4] = "ANDA";
  
p1[0] = "JayaSteel";
p1[1] = "JAYASTEEL";
p1[2] = "Jayasteel";

b3[0] = "Besi Beton Polos";
b3[1] = "Besi Beton Ulir";
b3[2] = "BjTS (Baja Tulangan Sirip)";
b3[3] = "BjTP (Baja Tulangan Polos)";
b3[4] = "Besi Beton";

w3[0] = "Wire Mesh";
w3[1] = "Wire mesh";
w3[2] = "Wiremesh";

var currentSlide = 0;
var slideInterval = setInterval(nextSlide,13100);
var tigaInterval = setInterval(tiga,33700);
var satuInterval = setInterval(satu,69700);
var tujuInterval = setInterval(tuju,8700);
var delaInterval = setInterval(dela,13700);

function nextSlide(){
currentSlide = (currentSlide+1)%slides.length;
var dua=document.getElementById("dua");
dua.innerHTML = slides[currentSlide];
dua.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 20%)`;
}
function tiga(){
ti = (ti+1)%p3.length;
var tiga=document.getElementById("tiga");
tiga.innerHTML = p3[ti];
tiga.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 30%)`;
}
function satu(){
si = (si+1)%p1.length;
var satu=document.getElementById("satu");
satu.innerHTML = p1[si];
satu.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 40%)`;
}
function tuju(){
bi = (bi+1)%b3.length;
var tuju=document.getElementById("tuju");
tuju.innerHTML = b3[bi];
tuju.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 30%)`;
}
function dela(){
di = (di+1)%w3.length;
var dela=document.getElementById("dela");
dela.innerHTML = w3[di];
dela.style.color = `hsl(${Math.floor(360*Math.random())}deg, 50%, 20%)`;
}
