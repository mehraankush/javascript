

let array = [["trippy",65],["hello",54,5]];

array.forEach((person)=>{

    person.forEach((data) => {
        console.log(data);
    })

})

for(let i of array){
    for(let j of i){
        console.log(j);
    }
}