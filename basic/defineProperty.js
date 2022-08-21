//Object.defineProperties(obj,prop,decription);

const student = {
    firstName : 'monica',
}
   
//getting property
    Object.defineProperties(student,"getName", {
         get : function(){
           return this.firstName;
         }
    });


//setting properties
 Object.defineProperties(student,"changeName",{
    set : function(value){
      this.firstName=value;
    }
 });

 console.log(student.firstName); //monica
 
 student.changeName = 'sarah';
 console.log(student.firstName); //sarah