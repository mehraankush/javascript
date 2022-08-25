

function* generatorfun(){
      yield 10;
      yield 20;
      yield 30;
}

const obj = generatorfun();

for(let i of obj){
    console.log(i);
}