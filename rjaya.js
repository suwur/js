var s1 = new Array ();
s1[0] = "Perkenalkan kami dari ";
s1[1] = "Selamat datang di ";
s1[2] = "Salam ";
s1[3] = "Inilah Persembahan dari ";
s1[4] = "Informasi untuk Anda, dari ";
s1[5] = "Persembahan dari ";
s1[6] = "Kami berusaha terus mengikuti perkembangan, dan kebutuhan pasar tetap menjadi perioritas kami. Tambahan info bagi Anda, dari ";
var i = Math.floor(7*Math.random());
var s1i = s1[i];

var t1 = new Array ();
t1[0] = " Jual";
t1[1] = " Menjual";
t1[2] = " Dijual";
t1[3] = " Harga";
t1[4] = " Update Harga";
t1[5] = " Harga Terbaru";
t1[6] = " Harga Hari Ini";
t1[7] = " Harga Terkini";
t1[8] = " Update Harga Terbaru";
t1[9] = " Update Harga Hari Ini";
t1[10] = " Update Harga Terkini";
var t1i = Math.floor(8*Math.random());
var t1i = t1[t1i];

var t2 = new Array ();
t2[0] = " dan Info";
t2[1] = " juga Tentang";
t2[2] = " & Mengenai";
t2[3] = " dan";
t2[4] = " &";
t2[5] = " -";
t2[6] = " dalam";
var t2i = Math.floor(7*Math.random());
var t2i = t2[t2i];

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
var bbi = Math.floor(7*Math.random());
var bbi = bb[bbi];

arrb = [" Januari"," Februari"," Maret"," April"," Mei"," Juni"," Juli"," Agustus"," September"," Oktober"," November"," Desember"];
date = new Date();
bln = date.getMonth();
bln = arrb[bln];
bul = bln;
thn = date.getFullYear();

var bbln = Math.floor(2*Math.random());
if (bbln==1){bln = bbi};

var r3 = new Array ();
r3[0] = " sedang mencari ";
r3[1] = " searching ";
r3[2] = " mencari ";
r3[3] = " ingin memperoleh ";
r3[4] = " ingin mendapat ";
r3[5] = " sedang mencari tahu ";
r3[6] = " untuk mendapatkan review terbaru ";
r3[7] = " cari-cari ";
r3[8] = " mau mendapatkan ";
r3[9] = " berharap peroleh ";
r3[10] = " hendak cari ";
r3[11] = " mencari ";
r3[12] = " cari perkembangan ";
r3[13] = " mencari update ";
r3[14] = " ingin dapat pembaruan ";
r3[15] = " ingin berita terkini ";
var r3ii = Math.floor(16*Math.random());
var r3i = r3[r3ii];

var r4 = new Array ();
r4[0] = " yang berhubungan dengan ";
r4[1] = " tentang ";
r4[2] = " perihal ";
r4[3] = " mengenai ";
r4[4] = " hal-hal yang ada kaitannya dengan ";
r4[5] = " sehubungan dengan ";
r4[6] = " dalam hal atau mengenai ";
r4[7] = " untuk ";
r4[8] = " yang ada hubungannya dengan ";
r4[9] = " yang bersangkutan dengan ";
r4[10] = " yang ada sangkut pautnya dengan ";
r4[11] = " info tambahan tentang ";
r4[12] = " artikel mengenai ";
r4[13] = " berita tentang ";
r4[14] = " informasi lebih dalam perihal atau mengenai ";
r4[15] = " kabar dalam hal atau tentang ";
var r4ii = Math.floor(16*Math.random());
var r4i = r4[r4ii];

var j1 = new Array ();
j1[0] = " ";
j1[1] = " update";
j1[2] = " untuk";
var j1i = Math.floor(3*Math.random());
var j1i = j1[j1i];

var j2 = new Array ();
j2[0] = " harga";
j2[1] = " perkembangan";
j2[2] = " info";
j2[3] = " informasi";
j2[4] = " kabar";
j2[5] = " berita";
j2[6] = " ";
var j2i = Math.floor(7*Math.random());
var j2i = j2[j2i];

var j3 = new Array ();
j3[0] = " terbaru";
j3[1] = " bulan ini";
j3[2] = " jenis yang paling banyak dipesan";
j3[3] = " jenis paling banyak diminati";
j3[4] = " hari ini";
j3[5] = " terlaris";
j3[6] = " tahun ini";
j3[7] = " ukuran yang paling banyak dipesan";
j3[8] = " saat ini";
j3[9] = " minggu ini";
j3[10] = " ukuran favorit";
j3[11] = " ukuran termurah yang paling banyak diminati atau paling sering dipakai";
j3[12] = " ukuran terlaris";
j3[13] = " ukuran yang paling banyak dipakai";
j3[14] = " jenis yang paling banyak dipakai atau paling banyak diminta dengan harga terbaik";
j3[15] = " termurah";
j3[16] = " terbaik";
j3[17] = " paling murah";
j3[18] = " recommended";
j3[19] = " paling banyak direkomendasikan";
j3[20] = " recommended banget";
j3[21] = " murah banget";
var j3i = Math.floor(22*Math.random());
var j3i = j3[j3i];

var str = document.title;var lg = str.length; var llg = lg - 28;
var ju8 = str.substring(12, llg);

var rrt = new Array ();
rrt[0] = "admin ";
rrt[1] = "marketing ";
rrt[2] = "petugas ";
rrt[3] = "kontak ";
rrt[4] = "nomor WA ";
rrt[5] = "";
var rrti = Math.floor(6*Math.random());
var rrti = rrt[rrti];

var y7 = new Array ();
y7[0] = " Besi Beton";
y7[1] = " besi beton neser";
y7[2] = " betoneser (besi beton)";
y7[3] = " besi cor";
y7[4] = " baja tulangan beton";
y7[5] = " Baja Tulangan";
y7[6] = " besi beton (deform bar)";
y7[7] = " besi batangan (besi beton)";
y7[8] = " besi bulat / besi beton";
var y7i = Math.floor(9*Math.random());
var y7i = y7[y7i];

var y9 = new Array ();
y9[0] = " besi beton polos";
y9[1] = " baja tulangan polos";
y9[2] = " besi beton polos (round bar)";
y9[3] = " baja tulangan polos (BJTP)";
y9[4] = " besi batangan polos (besi beton polos)";
y9[5] = " besi polos (besi beton polos)";
var y9i = Math.floor(6*Math.random());
var y9i = y9[y9i];

var y8 = new Array ();
y8[0] = " Wiremesh";
y8[1] = " wire mesh";
y8[2] = " Wermes (wiremesh)";
y8[3] = " anyaman besi (wiremesh)";
y8[4] = " besi Wiremesh";
y8[5] = " besi anyaman cor (wire mesh)";
var y8i = Math.floor(6*Math.random());
var y8i = y8[y8i];

var y6 = new Array ();
y6[0] = " besi beton ulir";
y6[1] = " baja tulangan ulir";
y6[2] = " besi beton ulir (deform bar)";
y6[3] = " baja tulangan sirip (BJTS)";
y6[4] = " besi ulir (besi beton ulir)";
y6[5] = " besi beton sirip";
y6[6] = " baja tulangan sirip";
y6[7] = " besi beton sirip (deform bar)";
y6[8] = " baja tulangan ulir (BJTS)";
y6[9] = " besi batangan sirip (besi beton ulir)";
y6[10] = " besi sirip (besi beton ulir)";
var y6i = Math.floor(11*Math.random());
var y6i = y6[y6i];

var f1 = new Array ();
f1[0] = " semoga";
f1[1] = " dengan harapan";
f1[2] = " mudah-mudahan";
f1[3] = " untuk semaksimal mungkin";
f1[4] = " kami harap";
var f1i = Math.floor(5*Math.random());
var f1i = f1[f1i];

var f2 = new Array ();
f2[0] = " Mungkin juga Anda";
f2[1] = " Pengunjung lain juga";
f2[2] = " Anda mungkin juga";
f2[3] = " Kepuasan pelanggan adalah yang kami utamakan. Banyak teman lain juga ";
f2[4] = " Yang lain juga ";
f2[5] = " Mungkin anda juga";
f2[6] = " Kebutuhan pelanggan selalu menjadi perioritas kami. Dan kami senang bisa memberikan yang terbaik untuk Anda dan pelanggan customer Anda. Netizen lain juga";
f2[7] = " Pengguna lain juga";
var f2i = Math.floor(8*Math.random());
var f2i = f2[f2i];

var f3 = new Array ();
f3[0] = " mendapatkan";
f3[1] = " memperoleh";
f3[2] = " menemukan";
f3[3] = " semaksimal mungkin mendapatkan";
f3[4] = " semaksimal mungkin menemukan";
var f3i = Math.floor(5*Math.random());
var f3i = f3[f3i];

var f4 = new Array ();
f4[0] = " bisa menghubungi";
f4[1] = " Anda bisa kontak";
f4[2] = " dapat anda peroleh dengan menghubungi petugas kami atau bisa mendapatkan infonya melalui";
f4[3] = " Anda bisa lihat-lihat di";
f4[4] = " infonya bisa anda buka di ";
f4[5] = " bisa tanyakan kepada admin kami atau anda buka di ";
f4[6] = " bisa dilihat di";
f4[7] = " bisa dibuka di";
var f4i = Math.floor(8*Math.random());
var f4i = f4[f4i];

var f5 = new Array ();
f5[0] = " untuk proyek anda dan untuk suplai distributor di Surabaya dan sekitarnya atau tempat lain di Indonesia";
f5[1] = "";
f5[2] = " sesuai dengan yang anda butuhkan";
f5[3] = " untuk keperluan anda";
f5[4] = " untuk proyek anda atau stok toko anda";
f5[5] = " untuk proyek anda dan untuk suplai distributor di tempat anda";
f5[6] = " untuk proyek anda dan untuk suplai distributor di daerah anda, juga mengenai cara order, pengiriman, dan pembayaran";
f5[7] = " untuk kebutuhan anda, mengenai stok, pengiriman dan yang lain";
f5[8] = " untuk melayani proyek customer anda";
f5[9] = " sesuai permintaan anda dan pelanggan anda";
f5[10] = " dan jangan ragu untuk menghubungi kami segera";
f5[11] = " update hari ini dan pemesanan";
var f5i = Math.floor(12*Math.random());
var f5i = f5[f5i];

var yy = new Array ();
yy[0] = " pabrik yang memperhatikan standar juga untuk konstruksi baja";
yy[1] = " untuk melayani kebutuhan Anda";
yy[2] = " pabrik bersertifikat";
yy[3] = " pabrik yang memiliki standar yang terbaik juga untuk pagar dan konstruksi baja, sesuai kebutuhan Anda";
yy[4] = " pabrik standar SNI juga untuk pagar dan konstruksi";
yy[5] = " siap melayani kebutuhan customer Anda";
var yi = Math.floor(6*Math.random());
var yyi = yy[yi];
