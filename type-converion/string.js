let result;

result = String(2+4);
console.log(result); //'6'


result = String(null);
console.log(result); //'null'

result = toString(null);
console.log(result); //'error'


result = String(undefined);
console.log(result); //'uundefined'

result = String(NaN);
console.log(result); //'NaN'

result = (345).toString();
console.log(result); //'345'

result = true.toString();
console.log(result); //'true'


