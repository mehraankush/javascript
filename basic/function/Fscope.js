class person {
    constructor() {
        this.name = 'Ankush';
        this.age = 20;

        this.Sayname = function () {
            console.log(this.age);

            let innerf = () =>
                {console.log(this.age);}   //20 now it'll acces the within the function.

            innerf();
        };
    }
}

let x = new person();
x.Sayname();