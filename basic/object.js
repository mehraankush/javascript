
const person={
    name:"Ankush",
    age: 20,
    marks: {
        maths:96,
        sci:93
    },
    greet: function(){console.log('welcome');}
}

console.log(person["name"]);
console.log(person.age);
console.log(person.marks.sci);
person.greet();