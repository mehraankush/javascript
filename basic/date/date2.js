const timeInMill = Date.now();
console.log(timeInMill); //1661428259190

const time = new Date;
const day = time.getDay();
console.log(day);//4
console.log(time.getDate()); //25
console.log(time.getFullYear()); //2022
console.log(time.getUTCFullYear()); //2022

const event = new Date("Feb 9 2022");
console.log(event.getDay());

event.setDate(18);
console.log(event.getDate());

//feb has only 28 days
event.setDate(35);
console.log(event.getDate());