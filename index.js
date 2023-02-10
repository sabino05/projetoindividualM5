const readline = require ('readline-sync')

let propriedades = [];
let aux = "";

while( aux != 'sair'){

    aux = readline.question('Digite a propriedade do css')

    propriedades.push(aux);

    aux =readline.question('para sair digite "sair" , continuar qualquer tecla');

    if(aux == 'sair'){
        console.log(propriedades.sort().join('\n'));
    }
    
}