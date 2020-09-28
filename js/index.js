
var jumpingJacks= function(numberOfTimes,whatToDo){
    document.getElementById("btnclick").onclick= jumpingJacks;
    for(var i =1; i<numberOfTimes; i++){
      console.log(i+" "+whatToDo);
    }
   
 };
 jumpingJacks(13,"Jump over the puddle");
