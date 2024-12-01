// 1.1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).


// for (let i = 1;  i<= 100; i++) {
//     console.log(i);
//     if (i == 50) {
//         break
//     }
// }


// 2.1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).

// for (let i = 1;  i<=20; i++) {
//     if (i % 3 !== 0) {
//         console.log(i);
//         continue;
//     }
// }


// 3.1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).


// for (let i = 1;  i<=30; i++){
//     console.log(i);
//     if (i == 5) {
//         break
//     }
// }


// 4.1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.


// for (let i = 1;  i<=50; i++){
//     if (i % 7 == 0) {
//         console.log(i);
        
//         continue;
//     }
// }

// 2.1.Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.


// let num = +prompt("sonni kiriting")

// switch (num) {
//     case 1:
//         console.log("dushanba");
//         break;

//         case 2:
//             console.log("seshanba");
//             break;

//             case 3:
//                 console.log("chorshanba");
//                 break;

//                 case 4:
//                     console.log("payshanba");
//                     break;

//                     case 5:
//                         console.log("juma");
//                         break;

//                         case 6:
//                             console.log("shanba");
//                             break;

//                             case 7:
//                                 console.log("yakshanba");
//                                 break;
//     default:
//         console.log("bunday hafta raqami mavjut emas");
        
//         break;
// }

// 2.2.Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.



// let num = +prompt("sonni kiriting")

// switch (num) {
//     case 1:
//     case 2:
//     case 12:

//         console.log("Qish");
//         break;

//     case 3:
//     case 4:
//     case 5:
//             console.log("bahor");
//             break;

//     case 6:
//     case 7:
//     case 8:
//                 console.log("yoz");
//                 break;

//     case 9:
//     case 10:
//     case 11:
//                     console.log("kuz");
//                     break;
//     default:
//         console.log("bunday oy raqami raqami mavjut emas");
        
//         break;
// }


// 2.3.Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.

// let number = +prompt("Son kiriting");


//     switch (number % 2) {
//         case 0:
//             console.log("kiritgan raqamingiz juft son");
//             break;
//         case 1:
//         case -1:
//             console.log( "kiritgan raqamingiz toq son");
//             break;
//         default:
//             console.log("Noto'g'ri qiymat");
//             break;
//     }





// 2.4.Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// let num = +prompt("sonni kiriting")

// switch (num) {
//     case 2:
//         console.log("Qoniqarsiz");
//         break;

//         case 3:
//         console.log("yaxshi emas");
//         break;

//         case 4:
//         console.log("Qoniqarli");
//         break;

//         case 5:
//         console.log("Alo");
//         break;
//     default:
//         console.log("bunday baho mavjud emas");
//         break;
// }


// 3.1.1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//      i++;

// }


// 3.2.10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// 3.3.Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

// let sum = 0;
// let son;

// while (true) {
//     son = +prompt("Son kiriting (0 kiritilsa to'xtaydi)");
    
//     if (son === 0) {
//         break;
//     }
    
//     sum += son;
// }

// console.log(sum);


// 3.4.Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.


// let son;

// while (true) {
//     son = +prompt("Son kiriting (musbat son kiritilsa to'xtaydi)");
    
//     if (son > 0) {
//         break;
//     }
    
// }

// console.log(son);


// 3.5.Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.


// let num = +prompt("sonni kiriting")

// let sum = 0

// while (num >= 1) {
//     let letsnum = num % 10
//     sum += letsnum  
//     num = Math.trunc(num / 10)
// }
// console.log(sum);


// 3.6.Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.

// let sum = 0;
// let son;

// while (true) {
//     son = +prompt("Son kiriting (0 kiritilsa to'xtaydi)");
    
//     if (son % 2 !== 0) {
//         sum += son;
        
//     if (son < 0) {
//         break;
//     }
//     }
   
// }

// console.log(sum);


// 3.7.1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

//  let i = 1;

// while (i <= 20) {
//     if (i % 2 !== 0) {
        
//         console.log(i);
//     }
//      i++;

// }


// 3.8.1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

// let i = 1
// while (i <= 50) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
//     i++
// }


// 3.9.Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
//  bajarolmadim



// 3.10.100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.


// let i = 100

// while (i >= 1) {
//     if (i % 10 == 0) {
//         console.log(i);
//     }
//     i--
// }



// 3.11.1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.

// let i = 1

// while (i <= 100) {
//         console.log(i*i);
//     i++
// }


// 3.12.Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.


// let son;

// while (true) {
//     son = +prompt("Son kiriting ( 5ga bolinsa to'xtaydi)");
    
//     if (son % 5 == 0) {
//         break;
//     }

// }

// console.log(son);


// 3.13.Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.



// let son;

// while (true) {
//     son = +prompt("Son kiriting ( kiritilgan son 10dan katta bolsa to'xtaydi");
    
//     if (son >= 10) {
//         break;
//     }

// }

// console.log(son);


// 3.14.Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.

// bajarolmadim

// 3.15.Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).


//  let son;
//  let sum = 0

// while (true) {
//     son = +prompt("nol ga teng bolsa to'xtaydi");
    
//     if (son <= 0) {
//         break;
//     }
//     sum += son
//     sum /= 2

// }

// console.log(sum);

// 4.1.Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang


// let num = +prompt("sonni kiriting")

// num > 0 ? console.log("musbat") : console.log("musbat emas");


// 4.2.Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.

// let num = +prompt("sonni kiriting")

// num % 2 !== 0 ? console.log("toq son") : console.log("juft son");


// 4.3.Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.
// let num = +prompt("sonni kiriting")

// num > 100 ? console.log("yuzdan katta") : console.log("yuzdan kichik");


// 4.4.Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.

// let num1 = +prompt("1-sonni kiriting")
// let num2 = +prompt("2-sonni kiriting")


// num1 > num2 && num2 > num1 ? console.log("nima deb yozishni bilmadim to'grisi") : console.log("nima deb yozishni bilmadim to'grisi");

// 4.5.Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.

// let num = +prompt("sonni kiriting")

// (num % 3 == 0 || num % 5 == 0) ? console.log("5ga va 3ga bolinadigan son") : console.log("5ga va 3ga bolinmaydigan son");

// 5.1.0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.


// console.log(Math.trunc(Math.random() * 100))  ;


// 5.2.Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).

// bajarolmadim 


// 6.1.1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let  i= 0; i <=50; i++) {
//     console.log(i);
    
// }

// 6.2.10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 6.3.1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
    
//     if (i % 2 !== 0) {
//         console.log(i);
        
//     }
    
// }

// 6.4.1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering

// for (let i = 1; i <= 50; i++) {
    
//     if (i % 2 == 0) {
//         console.log(i);
        
//     }
    
// }


// 6.5.1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.


// let sum = 0

// for (let i = 1; i <= 100; i++) {
     
//     sum += i
//     console.log(sum);
    
// }


// 6.6.Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.

// let num = +prompt("sonni kiriting")
// let sum = 1
// for (let i = 1; i <= num; i++) {
//     sum *= i
//     console.log(sum);
// }

// 6.7.1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.

// for (let i = 1; i <= 20; i++) {
    
//     console.log(i*i);
// }


// 6.8.Foydalanuvchi kiritgan sonning faktorialini hisoblang.

// let num = +prompt("sonni kiriting")
// let sum = 1
// for (let i = 1; i <= num; i++) {
//     sum *= i
//     console.log(sum);
// }

// 6.9.1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }


// 6.10.Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.

// let num = +prompt("sonni kiriting")
// for (let i = 1; i <= num; i++) {
    
//     console.log(i * i * i);
    
// }

// 6.11.1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.

// let sum = 0
// for (let i = 1; i <= 100; i+= 2) {
    
//     console.log(sum += i);
// }


// 6.12.1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.


// let num = [];
// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         num.push(i);
//         sum++;
//     }
//     if (sum === 10) {
//         break;
//     }
// }

// console.log(num);

// 6.13.Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.

// let son = +prompt("Musbat butun sonni kiriting");

 
//     let sum = 0;
//     for (let i = 1; i <= son; i++) {
//         sum += i;
//     }
//     console.log(sum);


// 6.14.1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i * i;
//     console.log(sum);
// }

// 6.15.Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.

// bajarolmadm

// 7.1.Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.


// let num = +prompt("sonni kiriting")

// for (let i = 1; i <= num; i++) {

// num % 3 == 0 ? console.log("3ga bo'linadigan son") : console.log("3ga bo'linadigan son emas");
// }


// 7.2.Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

// let num = +prompt("Oy raqamini kiriting (1-12)");

// switch (num) {
//         case 1:
//         case 2:
//         case 12:
    
//             console.log("Qish");
//             break;
    
//         case 3:
//         case 4:
//         case 5:
//                 console.log("bahor");
//                 break;
    
//         case 6:
//         case 7:
//         case 8:
//                     console.log("yoz");
//                     break;
    
//         case 9:
//         case 10:
//         case 11:
//                         console.log("kuz");
//                         break;
//         default:
//             console.log("bunday oy raqami raqami mavjut emas");
            
//             break;
//     }

// for (let i = 1; i <= num; i++) {
//    console.log(i);
   
// }


// 7.3.Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

// let son = Math.floor(Math.random() * 100) + 1; 

// let res = (son % 2 === 0) ? `${son} juft son.` : `${son} toq son.`;

// console.log(res);


// if (son % 2 === 0) {
//     let juftSonlar = '';
//     for (let i = 2; i <= 20; i += 2) { 
//                 juftSonlar += i + ' ';
//     }
//    console.log(juftSonlar);
   
// }


// 7.4.Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).
// bajarolmadim

// 7.5.Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

// let num = +prompt("hafta kunini kiriting")

// switch (num) {
//     case 1:
//         console.log("dushanba");
//         break;

//         case 2:
//             console.log("seshanba");
//             break;

//             case 3:
//                 console.log("chorshanba");
//                 break;

//                 case 4:
//                     console.log("payshanba");
//                     break;

//                     case 5:
//                         console.log("juma");
//                         break;

//                         case 6:
//                             console.log("shanba");
//                             break;

//                             case 7:
//                                 console.log("yakshanba");
//                                 break;
//     default:
//         console.log("bunday hafta raqami mavjut emas");
        
//         break;
// }
// if (num % 2 === 0) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }


// 7.6.Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).


// let num = Math.random() * 100;


// let nam = Math.trunc(num);

// let sum = 0;
// let i = 1;
// while (i <= nam) {
//     sum += i;
//     i++;
// }

// console.log(`Tasodifiy son ${num}`);
// console.log(`Butun qismi ${nam}`);
// console.log(`Butun qismga qadar bo'lgan sonlar yig'indisi ${sum}');

// 7.7.Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang
// bajarolmadim
