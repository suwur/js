
document.getElementById("hw").insertAdjacentHTML("afterend",
"<br><br><div id='hitung'>Jenis <span id='tra'>________</span>: <select id='jenisW' onChange='hitung()'><option value='0' selected>Standar</option><option value='1'>OverHang</option></select><br><br>Diameter (mm) : <input type='text' onchange='hitung()' onmouseout='hitung()' id='dia' value='6'><br><br><span id='result'></span><br><input type='button' onclick='hitung()' value=' Hitung '></div><style>select,#hitung,#result,#hasil,#hitung input[type='text'],#hitung input[type='button']{font-size:130%;line-height:1.2;font-weight:bold}input[type='text']{max-width:130px;}#res{font-size:60%}#tra{color:transparent}.kec{font-size:110%;margin:26px 0 0 16px}</style><span id='suhw'></span>");

function fR(angka){
var reverse = angka.toFixed(0).split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
return ribuan = ribuan.join('.').split('').reverse().join('');
}

function phi(){
brt = di * di * pj * 0.006165;
berat = brt.toFixed(2);
hbes = Number(hwmes);
  if (di < 5.6){hbes = Number(hwmes) + 200}
  if (di < 4.6){hbes = Number(hwmes) + 1700}
  if (di > 9.6){hbes = Number(hwmes) + 100}
  if (di > 10.5){hbes = Number(hwmes) + 200}
  if (di > 11.5){hbes = Number(hwmes) + 1450}
}

var se = 0;
function hitung(){
sel = document.getElementById('jenisW');
opt = sel.options[sel.selectedIndex];
if (opt.value == 0){pj = 156.6}else{pj = 151.2};
di = document.getElementById("dia").value;
phi()
harga = hbes * berat;
document.getElementById("result").innerHTML = "<span id = 'res'> Berat (per batang) :  </span>" + berat + "<span id = 'res'> kg <br>HARGA : Rp "+fR(hbes)+" per kg<br> = Rp </span>"+fR(harga)+"<span id = 'res'> per lembar</span>";
if (se < 1){
document.getElementById("hitung").insertAdjacentHTML("afterend",
"<br><br><a class='kec'><input type='button' onclick='hitu()' value=' Semua Ukuran '></a><br>");
se = se + 1;} 
}

function hitu(){
if (opt.value == 0){je = "Standar"}else{je = "OverHang"};
di = 4; phi(); mm = hbes * berat; m4 = fR(mm);mm4 = mm * 10; mm4 = fR(mm4);
di = 5; phi(); mm = hbes * berat; m5 = fR(mm);mm5 = mm * 10; mm5 = fR(mm5);
di = 6; phi(); mm = hbes * berat; m6 = fR(mm);mm6 = mm * 10; mm6 = fR(mm6);
di = 7; phi(); mm = hbes * berat; m7 = fR(mm);
di = 8; phi(); mm = hbes * berat; m8 = fR(mm);
di = 9; phi(); mm = hbes * berat; m9 = fR(mm);
di = 10; phi(); mm = hbes * berat; m10 = fR(mm);
di = 11; phi(); mm = hbes * berat; m11 = fR(mm);
di = 12; phi(); mm = hbes * berat; m12 = fR(mm);

di = 4.3; phi(); mm = hbes * berat; m43 = fR(mm);
di = 5.3; phi(); mm = hbes * berat; m53 = fR(mm);
di = 6.3; phi(); mm = hbes * berat; m63 = fR(mm);
di = 7.3; phi(); mm = hbes * berat; m73 = fR(mm);
di = 8.3; phi(); mm = hbes * berat; m83 = fR(mm);
di = 9.3; phi(); mm = hbes * berat; m93 = fR(mm);
di = 10.3; phi(); mm = hbes * berat; m103 = fR(mm);
di = 11.3; phi(); mm = hbes * berat; m113 = fR(mm);

di = 4.5; phi(); mm = hbes * berat; m45 = fR(mm);
di = 5.5; phi(); mm = hbes * berat; m55 = fR(mm);
di = 6.5; phi(); mm = hbes * berat; m65 = fR(mm);
di = 7.5; phi(); mm = hbes * berat; m75 = fR(mm);
di = 8.5; phi(); mm = hbes * berat; m85 = fR(mm);
di = 9.5; phi(); mm = hbes * berat; m95 = fR(mm);
di = 10.5; phi(); mm = hbes * berat; m105 = fR(mm);
di = 11.5; phi(); mm = hbes * berat; m115 = fR(mm);

di = 4.7; phi(); mm = hbes * berat; m47 = fR(mm);
di = 5.7; phi(); mm = hbes * berat; m57 = fR(mm);
di = 6.7; phi(); mm = hbes * berat; m67 = fR(mm);
di = 7.7; phi(); mm = hbes * berat; m77 = fR(mm);
di = 8.7; phi(); mm = hbes * berat; m87 = fR(mm);
di = 9.7; phi(); mm = hbes * berat; m97 = fR(mm);
di = 10.7; phi(); mm = hbes * berat; m107 = fR(mm);
di = 11.7; phi(); mm = hbes * berat; m117 = fR(mm);

document.getElementById("suhw").innerHTML = "Jenis: "+je+"<br>M4 = Rp "+m4+" per lbr = "+mm4+" /roll<br>M5 = Rp "+m5+" per lbr = "+mm5+" /roll<br>M6 = Rp "+m6+" per lbr = "+mm6+" /roll<br>M7 = Rp "+m7+" per lembar <br>M8 = Rp "+m8+" per lembar <br>M9 = Rp "+m9+" per lembar <br>M10 = Rp "+m10+" per lembar <br>M11 = Rp "+m11+" per lembar <br>M12 = Rp "+m12+" per lembar <br><br>4,3 = Rp "+m43+" per lembar <br>5,3 = Rp "+m53+" per lembar <br>6,3 = Rp "+m63+" per lembar <br>7,3 = Rp "+m73+" per lembar <br>8,3 = Rp "+m83+" per lembar <br>9,3 = Rp "+m93+" per lembar <br>10,3 = Rp "+m103+" per lembar <br>11,3 = Rp "+m113+" per lembar <br><br>4,5 = Rp "+m45+" per lembar <br>5,5 = Rp "+m55+" per lembar <br>6,5 = Rp "+m65+" per lembar <br>7,5 = Rp "+m75+" per lembar <br>8,5 = Rp "+m85+" per lembar <br>9,5 = Rp "+m95+" per lembar <br>10,5 = Rp "+m105+" per lembar <br>11,5 = Rp "+m115+" per lembar <br><br>4,7 = Rp "+m47+" per lembar <br>5,7 = Rp "+m57+" per lembar <br>6,7 = Rp "+m67+" per lembar <br>7,7 = Rp "+m77+" per lembar <br>8,7 = Rp "+m87+" per lembar <br>9,7 = Rp "+m97+" per lembar <br>10,7 = Rp "+m107+" per lembar <br>11,7 = Rp "+m117+" per lembar <br>";
  
if (se < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;se = se + 1;
document.getElementById("suhw").insertAdjacentHTML("afterend",
"<br>(daftar ini sebagai acuan saja, permintaan penawaran langsung ke admin)");}
}
