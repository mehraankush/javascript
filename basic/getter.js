
const student = {
    firstName :'monica',

    get getName(){
        return this.firstName;
    }
}

console.log(student.getName()); //error
console.log(student.getName);  //monica
console.log(student.firstName);//monica