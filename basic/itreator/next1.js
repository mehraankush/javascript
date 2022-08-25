//we can make our own itreable function

function Elemetdisplay(arr){
    let n = 0;

    return{
        next(){
            if(n < arr.length){
                return{
                    value :arr[n++],
                    done:false
                }
            }
            return{
                value :undefined,
                done:true
            }
        }
    }
}


const arr = ['hello','it','is','me','again'];

const result = Elemetdisplay(arr);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());