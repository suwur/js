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
document.getElementById("bresult").innerHTML = "<span id = 'res'> Berat Besi Beton (per batang) :  </span>" + bberat + "<span id = 'res'> kg <br>HARGA Besi Beton : Rp "+fR(bhbes)+" per kg<br> = Rp </span>"+fR(bharga)+"<span id = 'res'> per batang</span>";
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
bdi = 6; bphi(); bb = bhbes * bberat; b6 = fR(bb);
bdi = 8; bphi(); bb = bhbes * bberat; b8 = fR(bb);
bdi = 10; bphi(); bb = bhbes * bberat; b10 = fR(bb);
bdi = 12; bphi(); bb = bhbes * bberat; b12 = fR(bb);
bdi = 13; bphi(); bb = bhbes * bberat; b13 = fR(bb);
bdi = 16; bphi(); bb = bhbes * bberat; b16 = fR(bb);
bdi = 19; bphi(); bb = bhbes * bberat; b19 = fR(bb);
bdi = 22; bphi(); bb = bhbes * bberat; b22 = fR(bb);
bdi = 25; bphi(); bb = bhbes * bberat; b25 = fR(bb);
bdi = 29; bphi(); bb = bhbes * bberat; b29 = fR(bb);
bdi = 32; bphi(); bb = bhbes * bberat; b32 = fR(bb);
  
document.getElementById("subb").innerHTML = "⌀6 = Rp "+b6+" per batang <br>⌀8 = Rp "+b8+" per batang <br>⌀10 = Rp "+b10+" per batang <br>⌀12 = Rp "+b12+" per batang <br>⌀16 = Rp "+b16+" per batang <br>⌀19 = Rp "+b19+" per batang <br>⌀25 = Rp "+b25+" per batang <br>⌀32 = Rp "+b32+" per batang <br><br>D10 = Rp "+b10+" / batang <br>D13 = Rp "+b13+" / batang <br>D16 = Rp "+b16+" / batang <br>D19 = Rp "+b19+" / batang <br>D22 = Rp "+b22+" / batang <br>D25 = Rp "+b25+" / batang <br>D29 = Rp "+b29+" / batang <br>D32 = Rp "+b32+" / batang <br>";
if (be < 2){document.body.scrollTop += 290;document.documentElement.scrollTop += 290;be = be + 1;
document.getElementById("subb").insertAdjacentHTML("afterend",
"<br>(daftar harga ini hanya sebagai acuan, jangan ragu untuk meminta penawaran langsung ke petugas kami)");}
}

var s1 = new Array ();
s1[0] = " ⌀ 6 harga = ";
s1[1] = " ⌀ 8 harga = ";
s1[2] = " ⌀ 10 harga = ";
s1[3] = " ⌀ 12 harga = ";
s1[4] = " ⌀ 16 harga = ";
s1[5] = " ⌀ 19 harga = ";
s1[6] = " ⌀ 25 harga = ";
  
var s2 = new Array ();
s2[0] = "Rp "+b6;
s2[1] = "Rp "+b8;
s2[2] = "Rp "+b10;
s2[3] = "Rp "+b12;
s2[4] = "Rp "+b16;
s2[5] = "Rp "+b19;
s2[6] = "Rp "+b25;

var bb = new Array ();
bb[0] = " Termurah";
bb[1] = " Terbaik";
bb[2] = " Terlaris";
bb[3] = " Murah";
bb[4] = " Laris";
bb[5] = "";
bb[6] = " Bulan Ini";
bb[7] = " Hari Ini";
bb[8] = " Terkini";
bb[9] = " Terbaru";

num = 6;var i1 = 0;
document.write("<style scoped='' type='text/css'>#rp8 li{counter-increment: step-counter;list-style-type:none;margin:33px 0}#rp8 a{font-size:1.1rem}#rp8 img{border-radius:10px;float:left;margin-right:5px}.dudu li{width:99%}</style><ul id='rp8' class='dudu'>");
var cha = 140,
 lab = 'Besi%20Beton',
com='Comments',comd='Comments Disabled',cur=[],tot=0,cur=new Array(num);function ran(json){tot=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"https://www.jayasteel.com/feeds/posts/default/-/'+lab+'?alt=json-in-script&max-results=0&callback=ran\"><\/script>');function val(){for(var i=0;i<num;i++){var found=false;var rndValue=gra();for(var j=0;j<cur.length;j++){if(cur[j]==rndValue){found=true;break}};if(found){i--}else{cur[i]=rndValue}}};function gra(){var ranNum=1+Math.round(Math.random()*(tot-1));return ranNum};</script><script type="text/javaScript">function rpo(json){for(var i=0;i<num;i++){var entry=json.feed.entry[i];var bi = Math.floor(10*Math.random());var tit='Update '+entry.title.$t+bb[bi]+s1[i1]+s2[i1];i1 = i1 + 1;if('content'in entry){var rni=entry.content.$t}else{if('summary'in entry){var rni=entry.summary.$t}else{var rni=""}};rni=rni.replace(/<[^>]*>/g,"");if(rni.length<cha){var sni=rni}else{rni=rni.substring(0,cha);var whi=rni.lastIndexOf(" ");sni=rni.substring(0,whi)+"&#133;"};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var comnum=entry.thr$total.$t+' '+com}else{comnum=comd};if(entry.link[j].rel=='alternate'){var url=entry.link[j].href;var dat=entry.published.$t;if('media$thumbnail'in entry){var thu=entry.media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s105-c")}else{thu="https://1.bp.blogspot.com/-NuVrQk3ssIk/YCPtqtvQM5I/AAAAAAAABaw/QYKN03opdckZyMYgpZuoTZVDFj4G13b_wCLcBGAsYHQ/s105-c/4%2Bpencarian%2Bcari%2Bsearch%2Bicon%2Bcall%2B%252823%2529.pngg"}}};document.write('<li>');document.write('<a href="'+url+'" target="_blank" rel="nofollow"><img alt="'+tit+'" src="'+thu+'"/></a>');document.write('<div><h4><a href="'+url+'" target="_blank" rel="nofollow">'+tit+'</a></h4></div>');document.write('<div class="random-summary">'+sni+'</div><div style="clear:both"></div></li>')}};val();for(var i=0;i<num;i++){document.write('<script type=\"text/javascript\" src=\"https://www.jayasteel.com/feeds/posts/default/-/'+lab+'?alt=json-in-script&start-index='+cur[i]+'&max-results=1&callback=rpo\"><\/script>')};
document.write("</ul>");

