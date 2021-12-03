let i = 99;

if (true) {
    console.log ('Hello my friend', i)
    i = 8;
    let X = 10;
    if (true) {
        console.log('hello from IF', i, X);
    }
}
console.log('Dar vienas i ' + i);

console.log('-------------1--------------');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Padarykit ką nors be jokių prilyginimų nuliams, su loginiais operatoriais

let asilai = rand(0, 2);
let karves = rand(0, 2);
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

if (!(!asilai && !karves)) {
    console.log ('Gyvulių nėra', asilai, karves);
}
    else {
        console.log ('gyvulių nėra', asilai, karves);
    }


    console.log('-------------1--------------');

    let color1 = rand(0, 1) ? 'red' : 'blue';

    let color2 = rand(0, 1) ? 'red' : 'blue';
    
    let color3 = rand(0, 1) ? 'red' : 'blue';
    
    let color4 = rand(0, 1) ? 'red' : 'blue';

    // OK kai 1 ir 2 vienodi arba 3 ir 4 vienodi
    // kitu atveju NOT OK

   if (color1 == color2 || color3 == color4) {
       console.log('OK');
   }
   else {
       console.log ('NE OK')
   }


   console.log('-------------2--------------');
   //OK kai 1 ir 2 skiriasi, bet(ir) 1 ir 4 vienodi
//NOT OK kitais atvejais
if (color1 != color2 && color1 == color4) {
    console.log('OK');
}
else {
    console.log ('NE OK')
}

console.log('-------------3--------------');

//OK kai 1 ir 2 skiriasi, bet(ir) 1 ir 4  arba 1 ir 3 vienodi

//NOT OK kitais atvejais

if ((color1 != color2) && (color1 == color4  || color1 == color3))

{
    console.log('OK');
}
else {
    console.log ('NE OK')
}

console.log('-------------4--------------');

//OK kai 1 yra blue, bet(ir) 2 ir 3 ir 4 vienodi

//NOT OK kitais atvejais

if ('blue' == color1 && color2 == color3 && color2 == color4) {
    console.log('OK');
}
else {
    console.log ('NE OK')
}


console.log('-------------5--------------');


if((color1 != color2 && color3 == color4) || ('blue' == color1 && 'blue' == color4)) 
{
    console.log('Viskas ok')
}



//OK kai 1 ir 2 skiriasi, bet(ir) 3 ir 4 vienodi

//arba OK kai 1 ir 4 yra blue

//NOT OK kitais atvejais