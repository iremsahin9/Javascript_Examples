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
// console.log("çıkış yapıldı.")
// break;
// default:
//  console.log("lütfen 1-4 arasında  bir işlem seçiniz.");
//   break;

// }
