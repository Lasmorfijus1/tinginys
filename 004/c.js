console.log ('--------------Ciklai-------------')
// i - nuo žodžio iteracija - 1 ciklas
for (let i = 0; i < 6; i++) {
    // Do 5 times {
    console.log ('Labas', i);
  
    // }
}


// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
    
    console.log ('Labas', i);
  
    
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 41; i = i + 5) {
    
    console.log ('Labas', i);
  
    
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 49 50 51 52 53 
// (vienas skaičius vienoje eilutėje);

for (let i = 49; i < 54; i++) {
    
    console.log ('Labas', i);
  
    
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (let i = 4; i >= 0; i--) {
    
    console.log ('Labas', i);
  
    
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos 
//konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for (let i = 0; i < 9; i = i + 2) {
    
    console.log ('Labas', i);
  
    
}

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus 
// atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje);
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

for (let i = 0; i < 5; i++) {
    
    console.log ('Labas', rand (0, 10) );
  
    
}

