
class student {
    constructor(greet){
        this.name = 'mehra',
        this.greet = greet;
    }
}

student.prototype.age = 50;
const student1 = new student();
console.log(student1.age);

student.prototype = {age :30};
const student2 = new student();
//console.log(student1.age);
console.log(student2.age);

student.prototype.getGreet = function(){
  return this.greet;
}

const student3 = new student('Byee');
console.log(student3.getGreet());