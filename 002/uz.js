function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//1.
let egzaminoRezultatas = rand(1, 10);
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
console.log('-------------- 1 -----------------');
if (egzaminoRezultatas >= 4) {
    console.log('Šaunuolytė (Šaunuoliukas)', egzaminoRezultatas)
} else {
    console.log('Ateiteisi perlaikyti', egzaminoRezultatas);
}


//2.
let eksperimentoRezultatas = rand(1, 4);
// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
console.log('-------------- 2 -----------------');
if (eksperimentoRezultatas == 1 ) {
    console.log('Pavyko!', eksperimentoRezultatas);
} else if (eksperimentoRezultatas == 4) {
    console.log('Pavyko!', eksperimentoRezultatas);
} else {
    console.log('Kažkas ne taip :(', eksperimentoRezultatas);
}
// Loginis operatorius su sudėtinėmis sąlygomis

console.log('-------------- 2 su sudėtine -----------------');

if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4 ) {
console.log('Pavyko!', eksperimentoRezultatas) 
}
else {
    console.log('Kažkas ne taip :(', eksperimentoRezultatas);
}


//3.
let automobilioGreitis = rand(40, 125);
// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
console.log('-------------- 3 -----------------');
if (automobilioGreitis > 60) {
    let bauda = (automobilioGreitis - 60) * 5;
    console.log('susimokam: ', bauda, automobilioGreitis);
} else {
    console.log('All OK', automobilioGreitis);
}




//4.
let eilesNumeris = rand(1, 30);
// Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
console.log('-------------- 4 -----------------');
// if (eilesNumeris % 2 !== 0) {
if (eilesNumeris % 2) {
    console.log('Eilė neporinė', eilesNumeris);
} else {
    console.log('Eilė porinė', eilesNumeris);
}

//5.

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
console.log('-------------- 5 -----------------');

let raideABC = rand(1,2,3);
if ( raideABC == 1) {
    console.log('5. Uzduotis: A');
} else if ( raideABC == 2) {
    console.log('5. Uzduotis: B');
} else if ( raideABC == 3) {
    console.log('5. Uzduotis: C');
}



console.log('-------------- 6 -----------------');

//6.
let pirmas = rand(0, 2);
let antras = rand(0, 2);
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 
let sandauga = pirmas * antras;
let suma = pirmas + antras;
if (sandauga > suma ) {
    console.log('6. Didesnė sandauga: ', 'Sandauga: ', sandauga,'Suma: ', suma );
}
else(sandauga < suma) 
{
    console.log ('Didesnė suma','Suma: ', suma,'Sandauga: ', sandauga);
}


console.log('-------------- 7 -----------------');
//7.
let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
let bendrasSkaicius = asilai + karves;
console.log ('Bendras skaičius: ', bendrasSkaicius, 'Asilų: ', asilai, 'Karvių ', karves);
if (bendrasSkaicius >= 1) {
    console.log('Gyvulių yra', bendrasSkaicius);
}
else  {
    console.log ('Gyvulių nėra', bendrasSkaicius);
}

// 7 - antras sprendimas
// let asilai = rand(0, 2);
// let karves = rand(0, 2);
// if (asilai + karves) {
// console.log ('gyvulių yra', asilai, karves);

// }
// else {
//     console.log ('gyvulių nėra', asilai, karves);
// }


console.log('-------------- 8 -----------------');
//8.
let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju 
 if ((dalyvis1 + dalyvis2) > 6 || dalyvis1 == dalyvis2) {
    console.log('Laimėjo. Dalyvis 1: ',dalyvis1,' Dalyvis 2: ',dalyvis2);
 } else {
   console.log('Pralaimėjo. Dalyvis 1: ',dalyvis1,' Dalyvis 2: ',dalyvis2);
 }



console.log('-------------- 9 -----------------');
//9.
let daug = rand(1000000, 9999999);
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.

if (daug % 5 == 0 || daug % 10 == 0 || daug % 33 == 0   ) {
    console.log('Dalijasi be liekanos. Liekana iš 5:', daug % 5, ' Liekana iš 10: ', daug % 10, ' Liekana iš 33: ', daug % 33);
    } else {
  console.log('Nesidalija be liekanos. Liekana iš 5:', daug % 5, ' Liekana iš 10: ', daug % 10, ' Liekana iš 33: ', daug % 33);
     }

// Antras sprendimas
let daug = rand(1000000, 9999999);
let kiek = 0;
if( !(daug % 5)) {
    kiek++;
}
if( !(daug % 10)  ) {
    kiek++;
}
if( !(daug % 33)  ) {
    kiek++;
}
console.log (kiek, daug);

console.log('-------------- 10 -----------------');
//10.
let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

console.log('------- Popierius, žirklės, akmuo --------')
console.log('Aš: ', as, ', Tu:', tu);
 if (as == 'akmuo' && tu == 'zirkles' || as == 'popierius' && tu == 'akmuo' || as == 'zirklės' && tu == 'popierius') {
     console.log('Aš laimėjau');
 } else if (tu == as) {
     console.log('Lygiosios');
 }
else {
  console.log('Tu laimėjai');
 }