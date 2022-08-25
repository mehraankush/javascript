
function greet(name){

    function displayGreet(){
        console.log(`hello ${name}`);
    }

    return displayGreet;
}

const f1 = greet('Hii');
console.log(f1);
f1();