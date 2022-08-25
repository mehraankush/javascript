
const jsondata = '{"name":"mehra","quali":"graduating" }';
const javascript = {"name":"mehra","quali":"graduating" };

//Json ===> javascript
const obj = JSON.parse(jsondata);
console.log(obj);


//javascript ===> JSON
const obj2 = JSON.stringify(javascript);
console.log(obj2);