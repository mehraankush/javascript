

function* generatorfun(){

    const x = yield 'Hello';

    // return 133;

    console.log(x);
    console.log('some code');
    yield 5;
}

const result = generatorfun();

console.log(result.next());
console.log(result.next(68));
// console.log(result.return(69));
console.log(result.next());

/*next()	    Returns a value of yield
 return()	    Returns a value and terminates the generator
 throw()	    Throws an error and terminates the generator*/