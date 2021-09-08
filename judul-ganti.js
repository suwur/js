var i = 0,ti=0, b3=new Array(),w3=new Array(),p3=new Array(), si=0,di=0,bi=0,p1=new Array(), slides = new Array(),des=new Array();
des[0]="<span style='color: #674ea7;font-size: x-large;'>Ø</span> Besi beton atau baja tulangan (dalam bahasa Inggris disebut reinforcing bar disingkat rebar atau roundbar). Ada juga yang menyebut dengan nama besi bulat, besi cor, besi betoneser, beton neser, besi batangan. <br><br>Beton lebih kuat ketika mendapat beban tekan, namun kekuatan tariknya lemah. Besi beton meningkatkan kekuatan tarik struktur secara signifikan. Besi beton ulir dibentuk untuk memberikan ikatan yang lebih baik dengan beton.<br><br><span style='color: #990000;font-size: x-large;'>۝</span> Besi beton di pasaran ada 2 jenis, yakni baja tulangan polos biasa diberi kode BjTP dan baja tulangan sirip dengan kode BjTS. Untuk industri baja Indonesia diatur dalam SNI 07-2052-2002. Standar  Nasional  Indonesia  (SNI)  mengenai Baja  tulangan  beton  dibuat dalam rangka upaya mempersempit peluang adanya produk Baja tulangan beton non standar yang dikenal dengan istilah besi banci.<br><br><span style='color: #2b00fe;font-size: x-large;'>❀</span> Angka yang terdapat pada kode tulangan menyatakan batas kuat leleh/ulur. Baja beton BJTP 24 dimaksudkan sebagai baja beton polos dengan batas ulur 24 kg/mm2, dan baja beton BJTD 40 adalah tulangan beton dengan kuat leleh 40 Kn/cm2.<br><br><br>";
des[1]="<span style='color: #990000;font-size: x-large;'>۝</span> Sebagaimana namanya besi beton atau baja Tulangan, digunakan sebagai tulangan dalam pengerjaan konstruksi menggunakan sistem beton. Konstruksi jenis ini biasa disebut sebagai beton bertulang. Betonnya menggunakan adukan semen pasir dan kerikil, sebagai ikatan dan daya dukung tekan, sedangkan besi beton atau baja tulangan yang terbuat dari besi atau baja, dimanfaatkan sebagai fungsi tarik dalam konstruksi bangunan.<br><br><span style='color: #2b00fe;font-size: x-large;'>❀</span> Besi beton biasa terdiri dari besi beton polos dan besi beton ulir atau sirip. Besi beton polos biasanya berbentuk bulat sempurna. Kuat tarik nya biasanya 24, atau disebut bjtp 24 (baja tulangan polos 24). Sedangkan untuk besi beton ulir biasanya menggunakan baja dengan kuat tarik 40, atau disebut bjts 40 (baja tulangan sirip 40) ada juga yang menyebut bjtd (baja Tulangan deform). Ada juga BjTS yang menggunakan kuat tarik 35 atau 24 dan 50, sesuai dengan permintaan atau kebutuhan konstruksi.<br><br><span style='color: #674ea7;font-size: x-large;'>Ø</span> Di pasaran dikenal ada istilah besi banci. Apa itu besi banci? Biasanya yang dimaksud adalah, besi beton yang ukurannya (diameter atau panjang) tidak sesuai dengan standar. Bisa juga yang tidak sesuai standar adalah spesifikasi atau komposisinya. Tentu saja ini hanya sebagai pengetahuan saja, karena kami hanya menyediakan produk besi beton atau baja tulangan sesuai standar. Standar yang digunakan adalah standar SNI.";
des[2]="<span style='color: #2b00fe;font-size: x-large;'>❀</span> Dalam hal ini, wiremesh adalah rangkaian besi yang diatur menjadi lembaran kawat yang saling berpotongan dengan satukan menggunakan pengelasan. Wiremesh adalah bahan bangunan populer disebut anyaman besi. Bentuk anyamannya dengan pola kotak-kotak. Kegunaan atau fungsi Wiremesh adalah sebagai bahan bangunan dalam dunia konstruksi. Wiremesh dapat diaplikasikan sebagai besi tulangan saluran drainase beton pracetak misalnya untuk ditch precast, tutup buis beton dan culvert box. Wire mesh juga biasa digunakan untuk komponen yang memperkuat dak beton dan plat lantai biasanya digunakan pada bangunan bertingkat. Wiremesh cocok digunakan pada plat beton yang diletakkan di tanah untuk pengerasan dan mampu menahan beban diatasnya. Misalnya untuk pembuatan jalan raya atau jalan tol. <br><span style='color: #990000;font-size: x-large;'>۝</span> Wiremesh biasanya digunakan untuk sebagai tulangan saat pembuatan plat lantai beton atau dak beton. Jadi fungsinya sama dengan besi beton atau baja cor atau baja Tulangan dalam pekerjaan konstruksi. Pemakaian atau penggunaan wermes sebagai pengganti besi beton adalah untuk kepraktisan dan kekuatan. Dengan menggunakan wiremesh, pekerjaan menjadi lebih cepat lebih rapi dan lebih kokoh. Fungsi besi wermes lainnya adalah komponen yang digunakan untuk plat beton menggantung. Misalnya untuk gedung atau saluran pembuangan air hujan sebagai penulangan yang diberi plat beton.";
var desi = Math.floor(3*Math.random());
var desi = des[desi];
document.getElementById("desk").innerHTML = desi;

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
