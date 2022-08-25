
const arr = ['hello','it','is','me','again'];

const arritreator = arr[Symbol.iterator]();

console.log(arritreator.next());   //{ value: 'hello', done: false }
console.log(arritreator.next());   //{ value: 'it', done: false }
console.log(arritreator.next());   //{ value: 'is', done: false }
console.log(arritreator.next());   //{ value: 'me', done: false }
console.log(arritreator.next());   //{ value: 'again', done: false }
console.log(arritreator.next());   //{ value: undefined, done: true }

//value can take type of value but done takes only boolean
//if itreation is complete done returns true