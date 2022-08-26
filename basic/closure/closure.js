/*In JavaScript, closure provides access to the outer 
scope of a function from inside the inner function,
 even after the outer function has closed.*/

 function calculate(x){
    function multiply(y){
        return x*y;
    }
    return multiply;
 }

 //multiply2,multiply1 are closure
 const multiply1 = calculate(6);
 const multiply2 = calculate(7);

 console.log(multiply1);
 console.log(multiply1(6));
 console.log(multiply2(6));

 /*The calculate() function is called passing a parameter x.
  When multiply1(6) and multiply2(2) are called, the multipy() 
  function has access to the passed x argument of the outer calculate() function*/