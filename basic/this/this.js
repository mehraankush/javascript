//When this is used alone, this refers to the global object

let a = this;
console.log(a);

this.name = 'mehra';
// console.log(window.name);
console.log(this.name);
console.log(a);