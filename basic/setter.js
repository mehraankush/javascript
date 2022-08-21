
const student = {
    firstName : 'monica',

    /**
     * @param {string} newName
     */
    set changeName(newName){
        this.firstName = newName;
    }
}

console.log(student.firstName); //monica

student.changeName = 'sarah';
console.log(student.firstName); //sarah
