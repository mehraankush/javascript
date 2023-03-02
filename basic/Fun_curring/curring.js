

function sum(a,b,c){
    return a+b+c;
}

console.log(sum(2,3,6))

const curry = function(fn){
    return function(a){
        return function(b){
           return function(c){
            return function(d){
                return fn(a,b,c)
            }
           }
        }
    }
}

const curriedSum = curry(sum)

console.log(curriedSum(2)(3)(5)(4))

const add2 = curriedSum(3)
const add3 = add2(3)
const add4 = add3(5)
const add5 = add4(5)

console.log(add5)