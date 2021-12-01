// let konvertas;
// konvertas = 5;
// console.log(konvertas + 5);


// console.log (typeof konvertas + 5);
// console.log (konvertas  + "labas");

// console.log(Boolean(konvertas))

// // false <===> 0;
// // true <===> 1;

// // Visi skaičiai ===> true
// // tik 0 ===> false

// // visi stringai ===> true
// // tik '' ===> 'false'

// // true ===> zodis "true"
//  // true ===> žodis 'false'

//  // > < == >= <= !=
// //  kai norime paklaust ar arbūzai yra lygūs, paišome du lygybės ženklus

// // prigalvoti palyginimai arba sudurtiniai palyginimai
// // '!=' - nelygu

// console.log('2 > 5', 2 > 5);
// console.log('14 > 5', 14 > 5);
// console.log('18 == 5', 18 == 5);
// console.log('18 != 5', 18 != 5);
// console.log('18 >= 5', 18 >= 5);
// console.log('18 >= 18', 18 >= 5);

// // Baigiam kas liečia skaičius
// // Einam toliau

// console.log('a == a', 'a' == 'a');
// console.log('b > a', 'b' > 'a');
// console.log('bz > aa', 'bz' > 'aa');


// console.log('a > B', 'a' > 'B');
// console.log('A > b', 'a' > 'b');
// console.log('a > b', 'a' > 'b');

// // Žiūrėti ASCII Codes
// // super lygu === arba super nelygu !==
// console.log('Cehck start')

// if (2 > 5) {
//     console.log( 'Ja ja!');
// }
//     else {
//     console.log('Nein nein');
//     }


//     console.log('Check end')


function random(min, max) {    min = Math.ceil(min);    max = Math.floor(max);    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive  }
}
let rendomas = random(5, 10);

console.log('-------------')


let petras = random(3, 7);

let onute = random(5, 10);

if ( "petras" > "onute") 
{
   console.log( 'Laimėjo Petras');
}
else ("petras" < "onute") 
{
    console.log( 'Laimėjo Onutė');
}

// Pradedam funkciją rand

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
