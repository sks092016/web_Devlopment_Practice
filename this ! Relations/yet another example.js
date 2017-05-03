/* Date 10-04-2017 the following example gives another example of passing the 
explecit contextual objects  with the utility called CALL here the object is the 
function it self . Function is also a object in the Javascript . every thing is a object 
in Javascript */

/*The following program demonstrate for how many times the the function foo is called*/

'use strict' ;

function foo(num){

	console.log("foo : "+ num) ;
	
	this.count++ ;
}

foo.count = 0 ; // declaring and initializing a foo object variable count 

for(let i = 0 ; i < 5 ; i ++){

	/* By using CALL we are ensuring that the this in the function call foo
	will point to the function object foo itself without CALL this.count++ wont work */
	foo.call(foo,i)
}
// How many times the function foo is called 
console.log(foo.count + " times") ;
