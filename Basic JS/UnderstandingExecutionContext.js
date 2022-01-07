let name = 'John';

function first(){
    let a = 'Apple'
    console.log(a);
    second();
    console.log('Inside First')
}

function second(){
    let a = 'Aeroplane'
    console.log(a);
    third();
    console.log('Inside Second')
}

function third(){
    let a = 'Air'
    console.log(a);
    console.log('Inside Third')
}
first(); 
