console.log ('-----------------1----------------------');
// Sukurkite tris kintamuosius ir priskirkite jiems skirtingus 
// sveikus skaičius iš intervalo 5…25;
// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. 
// Pasinaudokite console.log atspauzdinkite sumos kintamąjį;

// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami 
// console.log;
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, 
// paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let digit1 = rand (5,25);
let digit2 = rand (5,25);
let digit3 = rand (5,25);

let sum;

sum = digit1 + digit2 + digit3;

console.log ('Sumos kintamasis yra ' + sum);

console.log ('-----------------1B----------------------');

let sumString = '' + digit1 + '' + digit2 + digit3;

console.log (`Sumos kintamasis yra ${sumString}`);

console.log ('--------------2 uždavinys-----------------')


let rendomas = rand(5, 10);
console.log(rendomas);


// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu 
// ir console.log atspauzdinkite kintamąjį 5 kartus;

let pasisveikinimas = 'Labas';

for (let i = 0; i < 5; i++) {
    
    console.log ('Labas', i);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 
// kartus;

console.log ('-----------------4----------------------');

for (let i = 0; i < 7; i++) {
    
    console.log (rendomas, i);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 
// uždavinio tiek kartų, koks skaičius yra sugeneruotas;

console.log ('-----------------5----------------------');

for (let i = 5; i < rendomas; i++) {
    
    console.log (rendomas, i);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
// koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

console.log ('-----------------6----------------------');
if (rendomas > 7 ) {
for (let i = 0; i < rendomas; i++) {
    
    console.log (rendomas, i);
}

}
else {console.log('Skaičius mažesnis')}

console.log ('-----------------7----------------------');



for (let i = 0; i < 5; i++) {
    
  let randomDigit = rand(10,20);

}


// Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius 
//skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 
// 5 kartus;

console.log ('----------7--------------')

let kintamasis

for (let i = 0; i < 5; i++) {
    
    kintamasis = ( rand (10, 20) );

    console.log (kintamasis)
  
    
}

kintamasis = '' + kintamasis + '' ;

console.log (kintamasis)


// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, 
// kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;


console.log ('-----------------7A----------------------');

let task7;

for (let i = 0; i < 5; i++) {
let randomDigit = rand (10, 20);
task7 = randomDigit;
console.log (task7);
}



// B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami 
// kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite 
// pasinaudodami console.log už ciklo ribų;

console.log ('-----------------7B----------------------');

task7 = 0;
console.log('====>', task7);

for (let i = 0; i < 5; i++); {
    let randomDigit = rand (10, 20);
    task7 = task7 + randomDigit;
    console.log (task7);
    }



// C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp 
// skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų 
// jam pasibaigus;

console.log ('-----------------7C----------------------');


task7 = '';


for (let i = 0; i < 5; i++); {
    let randomDigit = rand (10, 20);
    task7 = task7 + randomDigit + ' ';
  
    }

    console.log (task7);

// D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp 
// skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo 
// pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
// Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

console.log ('-----------------7D----------------------');


task7 = '';
let task7Sum = 0;


for (let i = 0; i < 5; i++); {
    let randomDigit = rand (10, 20);
    task7Sum = task7Sum + randomDigit;
    task7 = task7 + randomDigit;

  
    }
    task7 = task7 + task7Sum;

    console.log (task7);

    // kartojimas

    console.log ('-----------------Kartojimas----------------------');


    let moneta = rand(0,1) ? 'H' : 'S'
    console.log (moneta);


         console.log ('-----------------Kartojimas - 2 ----------------------');


         let h = 0;
         let s = 0;

         for (let i = 0; i < 7; i++); {
           
            let moneta = rand(0,1) ? 'H' : 'S';
            'H' == moneta ? h++ : s++;
            console.log (moneta);

            }
            

console.log (`Rezultatas S buvo ${s}, o H buvo ${h}`);