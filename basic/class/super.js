
class person {
    constructor(name){
        this.name = name;
    }

     greet() {
        console.log(`hello ${this.name}`);
    }
}

class student extends person{
     constructor(name){
        console.log('How are you');
         
        // call the super class constructor and pass in the name parameter
        //when the constructor of Student class is called, it also calls
        // the constructor of the Person class
        super(name);
     }
}

let student1 = new student('jonny');
student1.greet();