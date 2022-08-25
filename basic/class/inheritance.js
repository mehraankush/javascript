class person {
    constructor(name){
        this.name = name;
    }

     greet() {
        console.log(`hello ${this.name}`);
    }
}

class student extends person{

}

let student1 = new student('jonny');
student1.greet();