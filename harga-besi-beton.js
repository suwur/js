document.getElementById("hb").insertAdjacentHTML("afterend",
"<br><br><div id='bhitung'>Panjang (m) <span id='tra'>___</span>: <input type='text' onmouseout='bhitung()' onchange='bhitung()' id='bpjg' value='12'><br><br>Diameter (mm) : <input type='text' onchange='bhitung()' onmouseout='bhitung()' id='bdia' autofocus='' value='10'><br><br><div><span id='bhasil'><span id='bresult'></span></span></div><br><input type='button' onclick='bhitung()' value=' Hitung '></div><br><style>#bhitung,#bresult,#hasil,#bhitung input[type='text'],#bhitung input[type='button']{font-size:130%;line-height:1.2;font-weight:bold}input[type='text']{max-width:140px}#res{font-size:60%}#tra{color:transparent}.kec{font-size:90%;font-weight:100}</style><span id='subb'></span>");

function fR(angka){
var reverse = angka.toString().split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
return ribuan = ribuan.join('.').split('').reverse().join('');
}

var be = 0;
function bhitung()
{ 
bdi = document.getElementById("bdia").value;
bpj = document.getElementById("bpjg").value;
bbrt = bdi * bdi * bpj * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = Number(hbesi) + 400}
  else if (bdi > 12.9){bhbes = Number(hbesi) + 50}
  else{bhbes = Number(hbesi)}
bharga = bhbes * bberat;
document.getElementById("bresult").innerHTML = "<span id = 'res'> Berat Besi Beton (per batang) :  </span>" + bberat + "<span id = 'res'> kg <br>HARGA Besi Beton : Rp "+fR(bhbes)+" per kg<br> = Rp </span>"+fR(bharga)+"<span id = 'res'> per batang</span>";
if (be < 1){
document.getElementById("bhitung").insertAdjacentHTML("afterend",
"<br><br><a class='kec'><input type='button' onclick='bhitu()' value=' Semua Ukuran '></a><br>");
be = be + 1;}
}
  
function bphi(){
bbrt = bdi * bdi * bpj * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = hbesi + 400}
  else if (bdi > 12.9){bhbes = hbesi + 50}
  else{bhbes = hbesi}
}

function bhitu(){
bdi = 6; bphi(); b6 = fR(bhbes * bberat);
bdi = 8; bphi(); b8 = fR(bhbes * bberat);
bdi = 10; bphi(); b10 = fR(bhbes * bberat);
bdi = 12; bphi(); b12 = fR(bhbes * bberat);
bdi = 13; bphi(); b13 = fR(bhbes * bberat);
bdi = 16; bphi(); b16 = bfR(bhbes * bberat);
bdi = 19; bphi(); b19 = fR(bhbes * bberat);
bdi = 22; bphi(); b22 = fR(bhbes * bberat);
bdi = 25; bphi(); b25 = fR(bhbes * bberat);
bdi = 29; bphi(); b29 = fR(bhbes * bberat);
bdi = 32; bphi(); b32 = fR(bhbes * bberat);
  
document.getElementById("subb").innerHTML = "⌀6 = Rp "+b6+" per batang <br>⌀8 = Rp "+b8+" per batang <br>⌀10 = Rp "+b10+" per batang <br>⌀12 = Rp "+b12+" per batang <br>⌀16 = Rp "+b16+" per batang <br>⌀19 = Rp "+b19+" per batang <br>⌀25 = Rp "+b25+" per batang <br>⌀32 = Rp "+b32+" per batang <br><br>D10 = Rp "+b10+" / batang <br>D13 = Rp "+b13+" / batang <br>D16 = Rp "+b16+" / batang <br>D19 = Rp "+b19+" / batang <br>D22 = Rp "+b22+" / batang <br>D25 = Rp "+b25+" / batang <br>D29 = Rp "+b29+" / batang <br>D32 = Rp "+b32+" / batang <br>";
if (be < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;be = be + 1;
document.getElementById("subb").insertAdjacentHTML("afterend",
"<br>(daftar harga ini hanya sebagai acuan, jangan ragu untuk meminta penawaran langsung ke petugas kami)");}
}
