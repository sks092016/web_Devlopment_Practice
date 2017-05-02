/* 10-04-2017 this simple program is demonstrating the use of THIS a very important contextual and 
mythological "word for the programmers"
It can be any thing the OBJECT 
The context or a function 
the only thing it depends on is the USE 
how you use it
In the following simple demonstration this is reffereing to the object dynamically passed 
to the function not literlly but kinda objects calling the function in a deiiferent way 
using the FAMOUS call utility  
*/

function identyfy(){

	return this.name.toUpperCase();
	/*"this" reffering to the object in context, name reffereing to its property and rest is function */
}

function speak(){

	return "Hello I am " + identyfy.call(this) // this call utility explicitly passes the object context as agguments as if the function is called by the perticular object
}

// Now we are defining two objects which we will use as the context

var me = {
	
	name : "subhash"
} ;

var you = {

	name : "sunita"
} ;

console.log(identyfy.call(me)) ; // SUBHASH
console.log(identyfy.call(you)) ; // SUNITA

console.log(speak.call(me)) ;// Hello I am SUBHASH
console.log(speak.call(you)) ; // Hello I am SUNITA





