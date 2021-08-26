document.getElementById("hb").insertAdjacentHTML("afterend",
"<br><br><div id='bhitung'>Panjang (m) <span id='tra'>___</span>: <input type='text' onmouseout='bhitung()' onchange='bhitung()' id='bpjg' value='12'><br><br>Diameter (mm) : <input type='text' onchange='bhitung()' onmouseout='bhitung()' id='bdia' autofocus='' value='10'><br><br><div><span id='bhasil'><span id='bresult'></span></span></div><br><input type='button' onclick='bhitung()' value=' Hitung '></div><br><style>#bhitung,#bresult,#hasil,#bhitung input[type='text'],#bhitung input[type='button']{font-size:130%;line-height:1.2;font-weight:bold}input[type='text']{max-width:140px}#res{font-size:60%}#tra{color:transparent}.kec{font-size:90%;font-weight:100}</style><span id='subb'></span>");

var be = 0;
function bhitung()
{ 
bdi = document.getElementById("bdia").value;
bpj = document.getElementById("bpjg").value;
bbrt = bdi * bdi * bpj * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = Number(hbesi) + 0.4}
  else if (bdi > 12.9){bhbes = Number(hbesi) + 0.05}
  else{bhbes = Number(hbesi)}
bharga = bhbes * bberat;
document.getElementById("bresult").innerHTML = "<span id = 'res'> Berat Besi Beton (per batang) :  </span>" + bberat + "<span id = 'res'> kg <br>HARGA Besi Beton : Rp "+bhbes.toFixed(3)+" per kg<br> = Rp </span>"+bharga.toFixed(3)+"<span id = 'res'> per batang</span>";
if (be < 1){
document.getElementById("bhitung").insertAdjacentHTML("afterend",
"<br><br><a class='kec'><input type='button' onclick='bhitu()' value=' Semua Ukuran '></a><br>");
be = be + 1;}
}
  
function bphi(){
bbrt = bdi * bdi * bpj * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = Number(hbesi) + 0.4}
  else if (bdi > 12.9){bhbes = Number(hbesi) + 0.05}
  else{bhbes = Number(hbesi)}
}

function bhitu(){
bdi = 6; bphi(); bb = bhbes * bberat; b6 = bb.toFixed(3);
bdi = 8; bphi(); bb = bhbes * bberat; b8 = bb.toFixed(3);
bdi = 10; bphi(); bb = bhbes * bberat; b10 = bb.toFixed(3);
bdi = 12; bphi(); bb = bhbes * bberat; b12 = bb.toFixed(3);
bdi = 13; bphi(); bb = bhbes * bberat; b13 = bb.toFixed(3);
bdi = 16; bphi(); bb = bhbes * bberat; b16 = bb.toFixed(3);
bdi = 19; bphi(); bb = bhbes * bberat; b19 = bb.toFixed(3);
bdi = 22; bphi(); bb = bhbes * bberat; b22 = bb.toFixed(3);
bdi = 25; bphi(); bb = bhbes * bberat; b25 = bb.toFixed(3);
bdi = 29; bphi(); bb = bhbes * bberat; b29 = bb.toFixed(3);
bdi = 32; bphi(); bb = bhbes * bberat; b32 = bb.toFixed(3);
  
document.getElementById("subb").innerHTML = "⌀6 = Rp "+b6+" per batang <br>⌀8 = Rp "+b8+" per batang <br>⌀10 = Rp "+b10+" per batang <br>⌀12 = Rp "+b12+" per batang <br>⌀16 = Rp "+b16+" per batang <br>⌀19 = Rp "+b19+" per batang <br>⌀25 = Rp "+b25+" per batang <br>⌀32 = Rp "+b32+" per batang <br><br>D10 = Rp "+b10+" / batang <br>D13 = Rp "+b13+" / batang <br>D16 = Rp "+b16+" / batang <br>D19 = Rp "+b19+" / batang <br>D22 = Rp "+b22+" / batang <br>D25 = Rp "+b25+" / batang <br>D29 = Rp "+b29+" / batang <br>D32 = Rp "+b32+" / batang <br>";
if (be < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;be = be + 1;
document.getElementById("subb").insertAdjacentHTML("afterend",
"<br>(daftar harga ini hanya sebagai acuan, jangan ragu untuk meminta penawaran langsung ke petugas kami)");}
}
