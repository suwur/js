
document.getElementById("hw").insertAdjacentHTML("afterend",
"<br><br><div id='hitung'>Diameter (mm) : <input type='text' onchange='hitung()' onmouseout='hitung()' id='dia' value='6'><br><br>Jenis <span id='tra'>_________</span>: <select id='jenisW' onChange='hitung()'><option value='0' selected>Standar</option><option value='1'>OverHang</option></select><br><br>	<span id='result'></span><br><input type='button' onclick='hitung()' value=' Hitung '></div><style>select, #hitung, #result, #hasil, #hitung input[type='text'],#hitung input[type='button'] {font-size:130%;line-height:1.2;font-weight:bold}#hitung input,select,button{background-color:#333}input[type='text']{max-width: 190px;}#res{font-size:60%}#tra{color:transparent}.kec{font-size:110%;margin:26px 0 0 16px}</style><span id='suhw'></span>");

var se = 0;
function hitung(){
sel = document.getElementById('jenisW');
opt = sel.options[sel.selectedIndex];
if (opt.value == 0){pj = 156.6}else{pj = 151.2};
di = document.getElementById("dia").value;
brt = di * di * pj * 0.006165;
berat = brt.toFixed(2);
  if (di < 5.6){hbes = Number(hwmes) + 0.2}
  else if (di < 4.6){hbes = Number(hwmes) + 1.7}
  else if (di > 9.6){hbes = Number(hwmes) + 0.1}
  else if (di > 10.5){hbes = Number(hwmes) + 0.2}
  else if (di > 11.5){hbes = Number(hwmes) + 1.45}
  else{hbes = Number(hwmes)}
harga = hbes * berat;
document.getElementById("result").innerHTML = "<span id = 'res'> Berat Wiremesh (per batang) :  </span>" + berat + "<span id = 'res'> kg <br>HARGA Wiremesh : Rp "+hbes.toFixed(3)+" per kg = Rp </span>"+harga.toFixed(3)+"<span id = 'res'> per lembar</span>";
if (se < 1){
document.getElementById("hitung").insertAdjacentHTML("afterend",
"<a class='kec'><input type='button' onclick='hitu()' value=' Semua Ukuran '></a><br>");
se = se + 1;} 
}

function phi(){
brt = di * di * pj * 0.006165;
berat = brt.toFixed(2);
  if (di < 5.6){hbes = Number(hwmes) + 0.2}
  else if (di < 4.6){hbes = Number(hwmes) + 1.7}
  else if (di > 9.6){hbes = Number(hwmes) + 0.1}
  else if (di > 10.5){hbes = Number(hwmes) + 0.2}
  else if (di > 11.5){hbes = Number(hwmes) + 1.45}
  else{hbes = Number(hwmes)}
}
function hitu(){
if (se < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;se = se + 1;}
if (opt.value == 0){je = "Standar"}else{je = "OverHang"};
di = 4; phi(); mm = hbes * berat; m4 = mm.toFixed(3);
di = 5; phi(); mm = hbes * berat; m5 = mm.toFixed(3);
di = 6; phi(); mm = hbes * berat; m6 = mm.toFixed(3);
di = 7; phi(); mm = hbes * berat; m7 = mm.toFixed(3);
di = 8; phi(); mm = hbes * berat; m8 = mm.toFixed(3);
di = 9; phi(); mm = hbes * berat; m9 = mm.toFixed(3);
di = 10; phi(); mm = hbes * berat; m10 = mm.toFixed(3);
di = 11; phi(); mm = hbes * berat; m11 = mm.toFixed(3);
di = 12; phi(); mm = hbes * berat; m12 = mm.toFixed(3);

di = 4.3; phi(); mm = hbes * berat; m43 = mm.toFixed(3);
di = 5.3; phi(); mm = hbes * berat; m53 = mm.toFixed(3);
di = 6.3; phi(); mm = hbes * berat; m63 = mm.toFixed(3);
di = 7.3; phi(); mm = hbes * berat; m73 = mm.toFixed(3);
di = 8.3; phi(); mm = hbes * berat; m83 = mm.toFixed(3);
di = 9.3; phi(); mm = hbes * berat; m93 = mm.toFixed(3);
di = 10.3; phi(); mm = hbes * berat; m103 = mm.toFixed(3);
di = 11.3; phi(); mm = hbes * berat; m113 = mm.toFixed(3);

di = 4.5; phi(); mm = hbes * berat; m45 = mm.toFixed(3);
di = 5.5; phi(); mm = hbes * berat; m55 = mm.toFixed(3);
di = 6.5; phi(); mm = hbes * berat; m65 = mm.toFixed(3);
di = 7.5; phi(); mm = hbes * berat; m75 = mm.toFixed(3);
di = 8.5; phi(); mm = hbes * berat; m85 = mm.toFixed(3);
di = 9.5; phi(); mm = hbes * berat; m95 = mm.toFixed(3);
di = 10.5; phi(); mm = hbes * berat; m105 = mm.toFixed(3);
di = 11.5; phi(); mm = hbes * berat; m115 = mm.toFixed(3);

di = 4.7; phi(); mm = hbes * berat; m47 = mm.toFixed(3);
di = 5.7; phi(); mm = hbes * berat; m57 = mm.toFixed(3);
di = 6.7; phi(); mm = hbes * berat; m67 = mm.toFixed(3);
di = 7.7; phi(); mm = hbes * berat; m77 = mm.toFixed(3);
di = 8.7; phi(); mm = hbes * berat; m87 = mm.toFixed(3);
di = 9.7; phi(); mm = hbes * berat; m97 = mm.toFixed(3);
di = 10.7; phi(); mm = hbes * berat; m107 = mm.toFixed(3);
di = 11.7; phi(); mm = hbes * berat; m117 = mm.toFixed(3);

document.getElementById("suhw").innerHTML = "Jenis: "+je+"<br>M4 = Rp "+m4+" per lembar <br>M5 = Rp "+m5+" per lembar <br>M6 = Rp "+m6+" per lembar <br>M7 = Rp "+m7+" per lembar <br>M8 = Rp "+m8+" per lembar <br>M9 = Rp "+m9+" per lembar <br>M10 = Rp "+m10+" per lembar <br>M11 = Rp "+m11+" per lembar <br>M12 = Rp "+m12+" per lembar <br><br>4,3 = Rp "+m43+" per lembar <br>5,3 = Rp "+m53+" per lembar <br>6,3 = Rp "+m63+" per lembar <br>7,3 = Rp "+m73+" per lembar <br>8,3 = Rp "+m83+" per lembar <br>9,3 = Rp "+m93+" per lembar <br>10,3 = Rp "+m103+" per lembar <br>11,3 = Rp "+m113+" per lembar <br><br>4,5 = Rp "+m45+" per lembar <br>5,5 = Rp "+m55+" per lembar <br>6,5 = Rp "+m65+" per lembar <br>7,5 = Rp "+m75+" per lembar <br>8,5 = Rp "+m85+" per lembar <br>9,5 = Rp "+m95+" per lembar <br>10,5 = Rp "+m105+" per lembar <br>11,5 = Rp "+m115+" per lembar <br><br>4,7 = Rp "+m47+" per lembar <br>5,7 = Rp "+m57+" per lembar <br>6,7 = Rp "+m67+" per lembar <br>7,7 = Rp "+m77+" per lembar <br>8,7 = Rp "+m87+" per lembar <br>9,7 = Rp "+m97+" per lembar <br>10,7 = Rp "+m107+" per lembar <br>11,7 = Rp "+m117+" per lembar <br>";
}
