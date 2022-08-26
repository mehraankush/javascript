
function createStudent(name,rollNo,marks){
    // var student = {}; //we can that obj like new object() as well
    this.name=name;  //student.name = name
    this.rollNo=rollNo;
    this.marks=marks;
    // return student;
}

//we can change this with the use of constructor with the us ef 'new'
let student1 = new createStudent('abcd',43,54);
let student2 = new createStudent('xyz',4,70);
let student3 = new createStudent('pqrs',3,30);

console.log(student1);
console.log(student2);
console.log(student3);