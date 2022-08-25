
function showTime(){
    let dayTime = new Date();

    let time = dayTime.toLocaleTimeString();

    console.log(time)

     setTimeout(showTime,3000);
}


showTime();
// setInterval(showTime,1000);  //two repeat function call after 1sec