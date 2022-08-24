class person {
    constructor() {
        this.name = 'Ankush';
        this.age = 20;

        this.Sayname = function () {
            console.log(this.age);

            function innerf() {
                console.log(this.age);   //undefined bcuz it'll acces the globle variable

            }
            innerf();
        };
    }
}

let x = new person();
x.Sayname();