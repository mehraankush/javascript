
class student {
    constructor(){

        this.name = 'mehra',
        this.age = 23
    }
}

//objectConstructorName.prototype.key = 'value';

let student1 = new student();
let student2 = new student();

student.prototype.gender = 'male';
student.prototype.greet = function(){
    console.log('hello ' ,this.name);
};

console.log(student.prototype);
console.log(student1.gender);
console.log(student2.gender);
