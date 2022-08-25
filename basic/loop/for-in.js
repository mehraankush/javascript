const student={
    kajal : 54,
    gitik : 67,
    Ankush : 89
}

//The for...in loop is used to iterate through the keys of an object.
for (let i in student){
    console.log(`${i}=> ${student[i]}`);
}