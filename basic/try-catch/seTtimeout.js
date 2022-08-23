setTimeout(function(){
    try{
        console.log(a);
    }
    catch(error){
        console.log('error message' + error);
    }
},2000);