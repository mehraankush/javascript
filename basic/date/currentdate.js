const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// show in specific format
console.log(`${month+1} / ${date} / ${year}`); // 8/25/2022

const date1 = new Date(2008, 0, 33);
// Jan does not have 33 days //

console.log(date1);//2008-02-01