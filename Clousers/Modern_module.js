/*Date 24-01-2017 the program demonstrate the construction of the modern module used */

/*Today's modules contains the two more important things
  1. The module must contain a enclosing function which should be called at least once 
  2. The module must return an object which further references to the internal functions 
     this way both the private data members as well as the functions are well protected 
     from outside access.*/
     
function Coolmodule(){

var something = "Cool" ; // The private data member
var cool = [1,2,3] ; // The private data member

function doSomething(){
	console.log(something) ;
}

function doAnother(){
	console.log(cool.join(" ! "));
}

return { // Returning the object which hides the internal  functions which access the private Data member
	doSomething : doSomething,
	doAnother : doAnother
}

}

var some = Coolmodule();

some.doSomething() ; // Cool 
some.doAnother() ; // 1 ! 2 ! 3
