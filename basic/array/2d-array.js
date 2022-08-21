

let array = [["trippy",65],["hello",54,5]];

for (let i=0;i<array.length;i++){
    let innerarray = array[i].length;
    for(let j=0;j<innerarray;j++){
        console.log(array[i][j]);
    }
}