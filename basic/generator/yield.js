
function* generatorfun(){
    console.log('1. code is exacuted');
    yield 100;
    
    console.log('2. code is exacuted');
    yield 200;

    console.log('3. code is exacuted');
}

const result = generatorfun();
console.log(result.next())
console.log(result.next())
console.log(result.next())