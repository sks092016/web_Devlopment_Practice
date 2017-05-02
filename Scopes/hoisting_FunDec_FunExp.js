/* Date 21-01-17 the Program demonstrate defference in the type of 
   Hoisting in function decleration & Function Expression */

      
   try {
   	foo(); //  Results in Type Error Because the Variable foo get hoisted but not as a function Expression but as var foo ; only
   } catch (e) {
    console.log(e) ;
   }
   
      
   try {
   	bar(); // Reference Error As function Expression are not hoisted 
   } catch (e) {
   console.log(e);
   }
   

   var foo = function bar(){ // function expression
   	console.log("Hi Welcome to Hoisting") ;
   }