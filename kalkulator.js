
/*


Dibuat oleh
Nama  : Ramandha Putra Suryahadi
NIM   : 2201140
Kelas : RPL 2B


*/


const prompt=require("prompt-sync")({sigint: true}); //Fungsi untuk menggunakan prompt dalam terminal
let pilihan;
let nilai;


function penjumlahan(){
  let hasilpenjumlahan=0;
  let kembali;
  console.clear();
  let i=1;
  parseInt(i);

  console.log("===================================================");
  console.log("||             PETUNJUK PENJUMLAHAN              ||");
  console.log("||                                               ||");
  console.log("|| [i] Data yang diinputkan harus berupa angka   ||");
  console.log("|| [i] Inputan tidak boleh kosong                ||");
  console.log("|| [i] Masukkan [Z] untuk mengakhiri input nilai ||");
  console.log("===================================================\n");

  //Pengulangan selama user tidak menginputkan "Z"
  do{
  nilai=prompt(">> Masukkan nilai ke [" + i + "]: ");


  if(nilai!=null && nilai!="" && !isNaN(nilai)){ //Nilai akan diakumulasi jika inputan tidak kosong dan tidak berupa tipe data selain angka
    hasilpenjumlahan+=parseFloat(nilai);
    i++
  }
  else if(nilai=="Z")
  {

  }
  else //Notifikasi jika inputan tidak berupa angka atau kosong
  {
    console.log("\n[X] Data yang diinputkan tidak valid [X]");
  }
  }while(nilai!="Z" || nilai==null || nilai=="");

  console.log("\nHasil yang didapatkan adalah " + hasilpenjumlahan);

  console.log("\n==============================================\n");
  while(kembali!="Y" && kembali!="N" && kembali!="y" && kembali !="n"){ //Terus meminta user untuk memasukkan inputan hingga menginputkan "Y/y" atau "N/n"
  kembali=prompt(">> Apakah ingin kembali ke menu utama? (Y/N): ");
  // kembali.toUpperCase();
  }
  if(kembali=="Y" || kembali=="y"){ //Jika "Y/y" aplikasi akan kembali ke menu utama
    console.clear();
    Menu();
  }
  else if(kembali=="N" || kembali=="n") //Jika "N/n" aplikasi akan ditutup
  {
    console.log("\nSelamat tinggal :)");
  }
}



function Perkalian(){
  let hasilperkalian=1;
  let kembali;
  console.clear();
  let i=1;
  parseInt(i);

  console.log("===================================================");
  console.log("||              PETUNJUK PERKALIAN               ||");
  console.log("||                                               ||");
  console.log("|| [i] Data yang diinputkan harus berupa angka   ||");
  console.log("|| [i] Inputan tidak boleh kosong                ||");
  console.log("|| [i] Masukkan [Z] untuk mengakhiri input nilai ||");
  console.log("===================================================\n");

  do{
  nilai=prompt(">> Masukkan nilai ke [" + i + "]: ");

  if(nilai!=null && nilai!="" && !isNaN(nilai)){
    hasilperkalian*=parseFloat(nilai);
    i++
  }
  else if(nilai=="Z")
  {

  }
  else
  {
    console.log("\n[X] Data yang diinputkan tidak valid [X]");
  }
  }while(nilai!="Z" || nilai==null || nilai=="");

  console.log("\nHasil yang didapatkan adalah " + hasilperkalian);

  console.log("\n==============================================\n");
  while(kembali!="Y" && kembali!="N" && kembali!="y" && kembali !="n"){
  kembali=prompt(">> Apakah ingin kembali ke menu utama? (Y/N): ");
  // kembali.toUpperCase();
  }
  if(kembali=="Y" || kembali=="y"){
    console.clear();
    Menu();
  }
  else if(kembali=="N" || kembali=="n")
  {
    console.log("\nSelamat tinggal :)");
  }
}



function Pembagian(){
  let hasilpembagian=1;
  let kembali;
  console.clear();

  console.log("===================================================");
  console.log("||              PETUNJUK PEMBAGIAN               ||");
  console.log("||                                               ||");
  console.log("|| [i] Data yang diinputkan harus berupa angka   ||");
  console.log("|| [i] Inputan tidak boleh kosong                ||");
  console.log("===================================================\n");

  do{
  hasilpembagian=prompt(">> Masukkan nilai yang dibagi  : "); //Memasukkan nilai yang dibagi
  nilai=prompt(">> Masukkan nilai pembagi      : "); //Memasukkan nilai pembagi


  if(hasilpembagian!=null && hasilpembagian !="" && !isNaN(hasilpembagian) && nilai!=null && nilai!="" && !isNaN(nilai)){ 
    hasilpembagian/=parseFloat(nilai); //perhitungan apabila nilai yang diinputkan valid
  }
  else
  {
    console.log("[X] Data yang diinputkan tidak valid [X]\n"); //notifikasi muncul apabila nilai tidak valid
  }
  }while(hasilpembagian==null || hasilpembagian=="" || nilai==null || nilai=="" || isNaN(hasilpembagian) || isNaN(nilai));

  console.log("\nHasil yang didapatkan adalah " + hasilpembagian);

  console.log("\n==============================================\n");
  while(kembali!="Y" && kembali!="N" && kembali!="y" && kembali !="n"){
  kembali=prompt(">> Apakah ingin kembali ke menu utama? (Y/N): ");
  // kembali.toUpperCase();
  }
  if(kembali=="Y" || kembali=="y"){
    console.clear();
    Menu();
  }
  else if(kembali=="N" || kembali=="n")
  {
    console.log("\nSelamat tinggal :)");
  }
}



function Pangkat(){
  let hasilpemangkatan=1;
  let kembali;
  console.clear();

  console.log("===================================================");
  console.log("||             PETUNJUK PEMANGKATAN              ||");
  console.log("||                                               ||");
  console.log("|| [i] Data yang diinputkan harus berupa angka   ||");
  console.log("|| [i] Inputan tidak boleh kosong                ||");
  console.log("===================================================\n");

  do{
  hasilpemangkatan=prompt(">> Masukkan nilai yang ingin dipangkatkan  : "); //Memasukkan nilai yang dibagi
  nilai=prompt(">> Masukkan banyak pangkat                 : "); //Memasukkan nilai pembagi


  if(hasilpemangkatan!=null && hasilpemangkatan !="" && !isNaN(hasilpemangkatan) && nilai!=null && nilai!="" && !isNaN(nilai)){ 
    hasilpemangkatan**=nilai; //perhitungan apabila nilai yang diinputkan valid
  }
  else
  {
    console.log("[X] Data yang diinputkan tidak valid [X]\n"); //notifikasi muncul apabila nilai tidak valid
  }
  }while(hasilpemangkatan==null || hasilpemangkatan=="" || nilai==null || nilai=="" || isNaN(hasilpemangkatan) || isNaN(nilai));

  console.log("\nHasil yang didapatkan adalah " + hasilpemangkatan);

  console.log("\n==============================================\n");
  while(kembali!="Y" && kembali!="N" && kembali!="y" && kembali !="n"){
  kembali=prompt(">> Apakah ingin kembali ke menu utama? (Y/N): ");
  // kembali.toUpperCase();
  }
  if(kembali=="Y" || kembali=="y"){
    console.clear();
    Menu();
  }
  else if(kembali=="N" || kembali=="n")
  {
    console.log("\nSelamat tinggal :)");
  }
}



function akar(){
  let hasilakar=1;
  let kembali;
  console.clear();

  console.log("===================================================");
  console.log("||             PETUNJUK PEMANGKATAN              ||");
  console.log("||                                               ||");
  console.log("|| [i] Data yang diinputkan harus berupa angka   ||");
  console.log("|| [i] Inputan tidak boleh kosong                ||");
  console.log("===================================================\n");

  do{
  hasilakar=prompt(">> Masukkan nilai yang ingin diakarkan  : "); //Memasukkan nilai yang dibagi
  nilai=prompt(">> Masukkan bilangan akar               : "); //Memasukkan nilai pembagi


  if(hasilakar!=null && hasilakar !="" && !isNaN(hasilakar) && nilai!=null && nilai!="" && !isNaN(nilai)){ 
    hasilakar**=(1/nilai); //perhitungan apabila nilai yang diinputkan valid
  }
  else
  {
    console.log("[X] Data yang diinputkan tidak valid [X]\n"); //notifikasi muncul apabila nilai tidak valid
  }
  }while(hasilakar==null || hasilakar=="" || nilai==null || nilai=="" || isNaN(hasilakar) || isNaN(nilai));

  console.log("\nHasil yang didapatkan adalah " + hasilakar);

  console.log("\n==============================================\n");
  while(kembali!="Y" && kembali!="N" && kembali!="y" && kembali !="n"){
  kembali=prompt(">> Apakah ingin kembali ke menu utama? (Y/N): ");
  // kembali.toUpperCase();
  }
  if(kembali=="Y" || kembali=="y"){
    console.clear();
    Menu();
  }
  else if(kembali=="N" || kembali=="n")
  {
    console.log("\nSelamat tinggal :)");
  }
}



function Menu(){

    console.log("\nKalkulator Sederhana");
    console.log("====================");
    console.log("[1] Penjumlahan\n[2] Perkalian\n[3] Pembagian\n[4] Pangkat dari\n[5] Akar dari\n[6] Keluar Aplikasi\n");

  pilihan=prompt(">> Masukkan pilihan anda: ");
    if(pilihan=="1")
    {
        penjumlahan();
    }
    else if(pilihan=="2")
    {
        Perkalian();
    }
    else if(pilihan=="3")
    {
        Pembagian();
    }
    else if(pilihan=="4")
    {
        Pangkat();   
    }
    else if(pilihan=="5")
    {
        akar();
    }
    else if(pilihan=="6")
    {
      console.log("\nSelamat tinggal :)");
    }
    else
    {
        console.log("Masukkan inputan dari angka 1 hingga angka 6");
        console.clear();
        Menu();     
    }
  ;
}

Menu();


