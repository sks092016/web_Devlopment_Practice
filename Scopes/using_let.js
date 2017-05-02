/* Date 17-01-17 Using let for block scoping of 
   Variables also test that try & catch statement also creates their own scopes of variables 
   such as err
*/
'use strict' ;

var foo = true ;

if(foo){

	let bar = foo * 2 ; // creates bar a if block scoped variables 
	console.log(bar) ; // 2 
}

// After the above block the variable bar will be garbage collected automatically which frees the memory
var err = 2;

try {
		console.log(bar) ;	// result in referenceError as bar is not accessible globally

} catch(err) {  // cathes the ReferenceError and stores it in err inside the catch scope err is new var locally defined entirely different fromglobal err
	
	if(window.err == err){
		
		console.log('This is the global variable') ;
	
	} else {
		
		console.log('err is the another local variable in catch') ; // this will be executed
	}
	
	console.log(err) ;
}

console.log(err); // 2 the global value entirely different from catch change