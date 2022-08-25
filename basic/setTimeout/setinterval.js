
let count = 0;

function setTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();

    count ++;
    if(count==10){
        clearInterval(id);
    }
    console.log(time);
}

let id = setInterval(setTime,1000);