const x = Symbol('hello');  //symbols are unique  so another symbol with same name is different from each other

console.log(x);  //Symbol('hello')
console.log(x.description);  //hello

let id = Symbol('hey');

const student = {
    name : 'Ankush',
    [id] : 169
};

console.log(student);