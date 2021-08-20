var t1 = new Array ();
t1[0] = "Jual ";
t1[1] = "Menjual ";
t1[2] = "Dijual ";
t1[3] = "Harga ";
t1[4] = "Update Harga ";
t1[5] = "Harga Terbaru ";
t1[6] = "Harga Hari Ini ";
t1[7] = "Harga Terkini ";
var t1i = Math.floor(8*Math.random());
var t1i = t1[t1i];

var t2 = new Array ();
t2[0] = "dan Info ";
t2[1] = "juga Tentang ";
t2[2] = "& Mengenai ";
t2[3] = "dan ";
t2[4] = "& ";
t2[5] = "- ";
t2[6] = " ";
var t2i = Math.floor(8*Math.random());
var t2i = t2[t2i];

arrb = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
date = new Date();
bln = date.getMonth();
bln = arrb[bln]
thn = date.getFullYear();
