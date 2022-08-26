
class student {
    constructor(name,age,gender){

        this.name = name,
        this.age = age
        this.gender= gender
    }
}

//objectConstructorName.prototype.key = 'value';
/*whenever a function is created there is a prototype of that function 
is created and whwn we make object of that function object will refer to the prototype
and inherit it properties*/

let student1 = new student('mehra',34,'male');
let student2 = new student('hello',65,'female');

student.prototype.getGender = function(){
    return this.gender;
}
student.prototype.greet = function(){
    console.log('hello ' ,this.name);
};

console.log(student.prototype);
console.log(student1);
console.log(student2.gender);
console.log(student2.getGender);

//both are same
console.log(student1.__proto__ === student.prototype)
console.log(Object.getPrototypeOf(student2)===student.prototype);


console.log(Object.getPrototypeOf(student2));
//check if stydent1 is a prototype of student
console.log(student.prototype.isPrototypeOf(student1));

//check wheather this property is belong to whom
console.log(student1.hasOwnProperty(''))