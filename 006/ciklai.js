function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let skaicius131;
let skaicius132;

do {
skaicius131 = rand(0,10);
skaicius132 = rand(0,10);
console.log (skaicius131, skaicius132);

} while (skaicius131 != skaicius132);

console.log ('---------007------------------')

//Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo 
//viduje generuokite atsitiktinius skaičius funkcija rand(), 
//kurie yra iš intervalo 10…25. Ciklą kartokite tol, 
//kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;

let skaitiklis;
let pirstukai = 0;

do {
    skaitiklis = rand (10,25);
    
    console.log (skaitiklis);
    pirstukai++;
    
    } while (skaitiklis >= 12);

    console.log ('Pirstukai: ' + pirstukai)

  
/*
&& ===> ||
|| ===> &&
=  ===> !=
!= ===> =
=> ===> <=
<  ===> >=
>= ===> <
<= ===> >
*/
console.log ('---------007B------------------')
// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite 
// pasinaudodami console.log už ciklo ribų jam pasibaigus;


console.log ('---------007C------------------')
// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) 
// skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte 
// už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log ('---------007D------------------')

// Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame 
// suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami 
// console.log už ciklo ribų;

