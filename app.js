//-------------------------------------------------------ARAYÜZÜ OLMAYAN KOD İLE  YAPTIĞIM ÖRNEKLER-----------------------------------
// -------------DERS ORTALAMASI BULMA-----------------------------

// let vize = Number(prompt("Vize notunuz:"));
// let final = Number(prompt("Final notunuz:"));

// let ortalama= (vize*0.4) + (final*0.6)

// console.log(ortalama);

// if(ortalama>50){
// console.log("Geçtiniz"+ortalama);
// }else{
// console.log("Kaldınız:  "+ortalama)
// }

//---------------YOL AYRIMI UYGULAMASI-------------------------------------

/*

-                  -                 -
 -                 -                - 
   -               -               -  
    -              -              -
 1.yol            2.yol          3.yol    

*/

// let secilenyol= prompt("Seçilen yolu giriniz: ");

// if(secilenyol==1){
//       alert("seçilen yol  "+secilenyol+"'dir.");
// }
// else if(secilenyol==2){
//     alert("seçilen yol "+secilenyol+"'dir.");
// }
// else if(secilenyol==3){
//     alert("seçilen yol  "+secilenyol+"'dür.");
// }
// else{
//     alert("Geçerli bir yol giriniz,  yol seçeneğiniz 3 seçenektir.")
// }


//-----------------------BEDEN KİTLE ENDEKSİ HESAPLAMA--------------------------------

// let kg = Number(prompt("Kilonuzu giriniz:"));
// let boy =Number(prompt("Boyunuzu metre cinsinden giriniz:"))

// let endeks = kg/(boy*2)

// if(indeks<18.5 ){
// alert("İdeal kilonun altında: "+endeksndeks);
// }
// else if(endeksndeks>=18.5 && endeks<=24.9){
//     alert(" İdeal kiloda: "+endeksndeks);  
// }
// else if(endeks>=25 && endeksndeks<=29.9){
//     alert(" İdeal kilonun üstünde: "+endeksndeks);  
// }
// else if(endeks>=30 && endeks<=39.9){
//     alert(" İdeal kilonun çok üstünde (obez): "+endeks);  
// }
// else if (endeks>=40){
//     alert(" İdeal kilonun çok üstünde (morbid obez): "+endeks);  
// }
//\r\n=yeni satır yaratır
//alt+shift+f = kodları düzenler
//----------------------------------------ATM UYGULAMASI----------------------------------------------------
/*
1-Bakiye görüntüleme
2-para çekme
3-para yatırma
4-çıkış

*/
// let yenisatır="\r\n";

// let metin = "1-Bakiye görüntüleme"+yenisatır
// +"2-para çekme"+yenisatır
// +"3-para yatırma"+yenisatır
// +"4-çıkış"+yenisatır
// +"lütfen seçim yapınız:";
// let bakiye=Number("1500");

// let deger=prompt(metin);

// switch(deger){
// case "1":
//   alert("BAKİYENİZ: "+bakiye)
// break;
// case"2":
//  let cekilecektutar=Number(prompt("Çekilecek tutarı giriniz:"));
//  if(cekilecektutar<bakiye){
//   bakiye=bakiye-cekilecektutar;
//   alert("Bakiyeniz: "+ bakiye);
//  }
//  else{
//      alert("Bakiyenizi kontrol ediniz."+yenisatır
//      +"Bakiyeniz"+bakiye)
//  }
// break;
// case"3":
// let yatirilacaktutar=Number(prompt("Yatırılacak tutarı giriniz:"));
// bakiye=bakiye+yatirilacaktutar;
// alert("Güncel Bakiyeniz"+bakiye)
// break;
// case"4":
// alert("çıkış yapıldı.")
// break;
// default:
//  alert("lütfen 1-4 arasında  bir işlem seçiniz.");
//   break;
// }
//-------------------------TYT PUAN HESAPLAMA--------------------
/*
?sorular
1-türkçe 40 soru
2-matematik 40 soru
3-sosyal bilgiler 40 soru
4 fen bilimleri  20 soru

--------> 100 puanı ösym veriyor
--------> max 60 puan okul veriyor
--------> Her soru 4 puan 
*/

// let turkcedogru , turkceyanlis= 0;
// let matematikdogru , matematikyanlis= 0;
// let sosyaldogru,sosyalyanlis= 0;
// let fendogru , fenyanlis= 0;
// let puan = 0;
// let obp=0;
// let metin ="TYT PUAN HESAPLAMA UYGULAMASI"+"\r\n"
// +"1-Tyt puan hesaplama"+"\r\n"
// +"2-çıkış"+"\r\n"
// +"Lütfen işlem seçiniz:"

// let deger= prompt(metin)
// switch(deger){
//   case "1":
//         obp=Number(prompt("OBP'nizi giriniz"));
//         turkcedogru=Number(prompt("Türkçe doğru sayısı"));
//         turkceyanlis=Number(prompt("Türkçe yanlış sayısı"));

//         matematikdogru=Number(prompt("Matematik Doğru sayısı"));
//         matematikyanlis=Number(prompt("Matematik yanlış sayısı"));

//         sosyaldogru=Number(prompt("Sosyal Bilgiler doğru sayısı"));
//         sosyalyanlis=Number(prompt("Sosyal Bilgiler yanlış sayısı"));

//         fendogru=Number(prompt("Fen Bilimleri Doğru sayısı"));
//         fenyanlis=Number(prompt("fen Bilimleri yanlış sayısı"));

//         let dogru= turkcedogru+matematikdogru+sosyaldogru+fendogru;
//         let yanlis=turkceyanlis+matematikyanlis+sosyalyanlis+fenyanlis;
//         let dogrusayisi=dogru-(yanlis/4);
        
//         puan= (dogrusayisi*4)+100+obp;
//         alert("TYT Puanınız: "+puan)

//   break;
  
//   case"2":
//   alert("Çıkış yapıldı.");
//   break;

//   default:
//     alert("işlem seçiniz");
//     break;
// }
//---------------------------Çarpım tablosu uygulaması-------------------------------------------

// for(let i=1; i<=10; i++){
//  for(let j=1;j<=10;j++){
//   console.log(i+"x"+j+"="+(i*j))
//  }
// console.log("-------------------------------------")
// }
//----------------------Asal sayı bulma uygulaması---------------
// let sayi=Number(prompt("Lütfen Bir sayı giriniz:"));

// for(let i=2 ; i<=Math.floor(sayi/2); i++){
//      if(sayi%i==0){
//     alert(sayi  +""+"Asal değildir")
//      break;
//      }
//      else{
//       alert(sayi+""+":Asaldır.")
//      }
// }
//-----------------------Faktöriyel bulma uygulaması-------------
// let sayi =Number(prompt("Bir sayı giriniz:"));
// let carpim=1;
// for(let i=1;i<=sayi;i++){
//      carpim=carpim*i
// }
// alert("sonuç : "+carpim)
//-------------------------HARF SAYISI UYGULAMASI--------------------------------------------
// let metin="Şuan javascript çalışıyorum";

// let harf=prompt("Harfi giriniz:");

// let sonuc =bul(harf);
// alert("harf sayısı : "+""+sonuc);

// function bul(harf){
//   let toplam=0;
// for(i=0; i<metin.length;i++)
// if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
//   toplam+=1;
// }
// return toplam;
// }