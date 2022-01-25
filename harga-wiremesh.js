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
document.getElementById("result").innerHTML = "<span id = 'res'> Berat Wiremesh M" + di + " (per batang) :  </span>" + berat + "<span id = 'res'> kg <br>HARGA Wire Mesh M" + di + " : Rp "+fR(hbes)+" per kg<br> = Rp </span>"+fR(harga)+"<span id = 'res'> per lembar</span>";
if (se < 1){
document.getElementById("hitung").insertAdjacentHTML("afterend",
"<br><br><a class='kec'><input type='button' onclick='hitu()' value=' Semua Ukuran '></a><br>");
se = se + 1;} 
}

if (opt.value == 0){je = "Standar"}else{je = "OverHang"};
if (window.innerWidth < 800){ 
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://suwur.github.io/js/daftar-wiremesh.js'; 
    document.getElementsByTagName('head')[0].appendChild(script);
    return false;
}else{
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://suwur.github.io/js/tabel-wiremesh.js'; 
    document.getElementsByTagName('head')[0].appendChild(script);
    return false;
}  
if (se < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;se = se + 1;}
document.getElementById("suhw").insertAdjacentHTML("afterend","<br>(daftar ini sebagai acuan saja, permintaan penawaran langsung ke admin)");
