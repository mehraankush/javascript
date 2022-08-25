
class person{
    constructor(name){
        this.name = name;
        this.occupation = 'unimployed';
    }

    greet(){
        console.log(`hello ${this.occupation} ${this.name}`)
    }
}

class student extends person {
     constructor(name){

        super(name);
        this.name = name;
        this.occupation = 'student';
     }

     greet(){
        console.log(`hello ${this.occupation} ${this.name}`)
     }
}

const student1 = new student('jonny');
//student class will override the person class
student1.greet();