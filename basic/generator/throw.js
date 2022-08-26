
function* generatorfun(){
    yield 10;
    yield 20;
    yield 30;
}

const result = generatorfun();

console.log(result.next());
console.log(result.throw(new Error('Error Error')));
console.log(result.next());

/* USES OF GENERATORS 
Generators let us write cleaner code while writing asynchronous tasks.
Generators provide an easier way to implement iterators.
Generators execute its code only when required.
Generators are memory efficient.*/