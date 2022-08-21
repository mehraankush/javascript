//constructure
class Person {
    constructor(person_name,person_age,) {
        this.name = person_name,
            this.age = person_age;
    }
}
//creating an object
let person1 = new Person('gitik',20);
let person2 = new Person('aman',21);
//assing values the values are unique to both of tham
person1.gender = 'male';
person2.gender = 'woman';

person1.greet =function() {
    console.log('hello');
}

//calling the function
person1.greet();  //hello
//person2.greet();  //error

console.log(person1.gender);
console.log(person2.gender);
console.log(person1.name);

//adding new property to constructor 
Person.prototype.education='graduated';

console.log(person1.education);
console.log(person2.education);
