
const num = 40;

try{
    if(num>50){
        console.log(num);
    }
    else {
        //if this statement is exacuted then try will exit and control goes to catch
        throw new error('error occured');
    }

    console.log('hello');
}

catch(error){
    console.log('error caught' + error);
}