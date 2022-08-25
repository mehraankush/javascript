//In JavaScript, months are counted from 0 to 11. January is 0 and December is 11.

const time = new Date();
console.log(time);

//A JavaScript date defines the EcmaScript epoch that 
//represents milliseconds since 1 January 1970 UTC.
const time1 = new Date(0);
console.log(time1);

//10 years
const time2 = new Date(100000000000);
console.log(time2);
// new date(date string)
//ISO format yyyy-mm-dd
const date = new Date("2020-09-01");
console.log(date);

const date2 = new Date("2022-09");
console.log(date2);

const date3 = new Date("2022");
console.log(date3);

//short date formate mm/dd/yyyy
const date4 = new Date("09/02/2022");
console.log(date4);
//long date formate mmm dd yyyy
//commas are ignored
const date5 = new Date("sep ,15, 2002");
console.log(date5);

/* month can be full or abbreviated. Also month names are insensitive.
we can write sept in place of sep or anything
months and day can be in anyoder*/
const date6 = new Date("15,sep,2002");
console.log(date6);

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
const date7 = new Date(2002,09,15,5,30,15,90);
console.log(date7);
