
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.
let egzaminoRezultatas = rand(1, 10);

if (egzaminoRezultatas >= 4) {
    console.log('1. Egzamintas išlaikytas');
} else {
    console.log('2. Egzamintas neišlaikytas.');
}
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
if (egzaminoRezultatas == 1) {
    console.log('1. Egzamintas išlaikytas');
} 
else if (egzaminoRezultatas == 4) {
    console.log('2. Egzamintas išlaikytas.');
}

else {
    console.log('3. Egzamintas neišlaikytas.');
}



//3.
let automobilioGreitis = rand(40, 125);
let bauda = automobilioGreitis * 5;
if (automobilioGreitis > 60) {
    console.log(bauda);
}
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5


//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
// if (condition) {
//     console.log()
// }







//5.
let raideABC = rand(1,2,3);
if ( raideABC == 1) {
    console.log('5. Uzduotis: A');
} else if ( raideABC == 2) {
    console.log('5. Uzduotis: B');
} else if ( raideABC == 3) {
    console.log('5. Uzduotis: C');
}
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę


//6.
let pirmas = rand(0, 2);
let antras = rand(0, 2);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.

//10.
let as = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";
let tu = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirklės") : "akmuo";
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
