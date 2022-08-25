const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

//not iterable ,only stores object i don't why it's not working