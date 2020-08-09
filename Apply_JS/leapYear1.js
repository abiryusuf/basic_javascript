

function leapYear(year){
    var result; 
    
    if (year/400){
      //result = true
      return "This is leap year"
    }
    else if(year/100){
     // result = false
      return "This is not leap year"
    }
    else if(year/4){
      //result= true
      return "This is leap year"
    }
    else{
      //result= false
      return "This is not leap year"
    }
    //return result
 }
 var x = leapYear(2317);
 console.log(x);