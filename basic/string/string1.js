const text1 ='hello';
const text2 ='world';
const text3 ='   javascript   ';

const result = text1.toUpperCase();
console.log(result);

const result1 = text1.concat(' ',text2);
console.log(result1);

const result2 = text3.trim();
console.log(result2);


const result3 = text1.split();
console.log(result3);


const result4 = text1.slice(1,5);
console.log(result4);

// charAt(index)	returns the character at the specified index
// concat()	        joins two or more strings
// replace()	    replaces a string with another string
// split()	        converts the string to an array of strings
// substr(start, length)	returns a part of a string
// substring(start,end)	    returns a part of a string
// slice(start, end)	    returns a part of a string
// toLowerCase()	        returns the passed string in lower case
// toUpperCase()	        returns the passed string in upper case
// trim()	                removes whitespace from the strings
// includes()	            searches for a string and returns a boolean value
// search()             	searches for a string and returns a position of a match