
class student {
    constructor(){
        this.name = 'mehra'
    }
}

student.prototype.age = 50;
const student1 = new student();
console.log(student1.age);

student.prototype = {age :30};
const student2 = new student();
//console.log(student1.age);
console.log(student2.age);
