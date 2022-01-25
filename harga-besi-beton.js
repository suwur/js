document.getElementById("hb").insertAdjacentHTML("afterend",
"<br><br><div id='bhitung'>Panjang (m) <span id='tra'>___</span>: <input type='text' onmouseout='bhitung()' onchange='bhitung()' id='bpjg' value='12'><br><br>Diameter (mm) : <input type='text' onchange='bhitung()' onmouseout='bhitung()' id='bdia' autofocus='' value='10'><br><br><div><span id='bhasil'><span id='bresult'></span></span></div><br><input type='button' onclick='bhitung()' value=' Hitung '></div><br><style>#bhitung,#bresult,#hasil,#bhitung input[type='text'],#bhitung input[type='button']{font-size:130%;line-height:1.2;font-weight:bold}input[type='text']{max-width:140px}#res{font-size:60%}#tra{color:transparent}.kec{font-size:90%;font-weight:100}</style><span id='subb'></span>");

function fR(angka){
var reverse = angka.toFixed(0).split('').reverse().join(''),
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
document.getElementById("bresult").innerHTML = "<span id = 'res'> Berat Besi Beton " + bdi + " (per batang) :  </span>" + bberat + "<span id = 'res'> kg <br>HARGA Besi Beton " + bdi + " : Rp "+fR(bhbes)+" per kg<br> = Rp </span>"+fR(bharga)+"<span id = 'res'> per batang</span>";
if (be < 1){
document.getElementById("bhitung").insertAdjacentHTML("afterend",
"<br><br><a class='kec'><input type='button' onclick='bhitu()' value=' Semua Ukuran '></a><br>");
be = be + 1;}
}
  
function bphi(){
bbrt = bdi * bdi * bpj * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = Number(hbesi) + 400}
  else if (bdi > 12.9){bhbes = Number(hbesi) + 50}
  else{bhbes = Number(hbesi)}
}

function bhitu(){
if (window.innerWidth < 800){  
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://suwur.github.io/js/daftar-besi-beton.js'; 
    document.getElementsByTagName('head')[0].appendChild(script);
    return false;
}else{
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://suwur.github.io/js/tabel-besi-beton.js'; 
    document.getElementsByTagName('head')[0].appendChild(script);
    return false;
}
}
