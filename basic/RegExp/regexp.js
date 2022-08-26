const string = 'Find me';
const pattern = /me/;

console.log(string.search(pattern)); //5
console.log(string.replace(pattern,'found you')); //Find found you


//\s - Matches where a string contains any whitespace character. Equivalent to [ \t\n\r\f\v]
const regex = /[\s,]+/;
const result = 'Hello World'.split(regex);
console.log(result);

/*\d - Matches any decimal digit. Equivalent to [0-9]
Parentheses () is used to group sub-patterns
\D - Matches any non-decimal digit. Equivalent to [^0-9]
 {n,m}. This means at least n, and at most m repetitions of the pattern left to it*/
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const result2 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result2);