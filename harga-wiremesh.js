
document.getElementById("hw").insertAdjacentHTML("afterend",
"<br><br><div id='hitung'>Diameter (mm) : <input type='text' onchange='hitung()' onmouseout='hitung()' id='dia' value='6'><br><br>Jenis <span id='tra'>_________</span>: <select id='jenisW' onChange='hitung()'><option value='0' selected>Standar</option><option value='1'>OverHang</option></select><br><br>	<span id='result'></span><br><input type='button' onclick='hitung()' value=' Hitung '></div><br><br><br><br><br><style>select, #hitung, #result, #hasil, #hitung input[type='text'], #hitung input[type='button'] {font-size: 130%; line-height: 1.2; font-weight:bold} #hitung input, select, button{background-color:#333}input[type='text']{max-width: 190px;}#res {font-size: 60%; }#tra {color: transparent;}</style>");

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
}
