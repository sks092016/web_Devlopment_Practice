/* Date 21-01-17 The following tprogram demonstrate the one of powerfull tool of JS i.e Clousers*/
function foo () {
	// body...
	var a = 2 ;

	function bar () {
		// body...
		console.log(a); 
	}

	return bar ;
}

var baz = foo() ;

baz() ; // 2 This is the demonstration of clouser despite the function foo was closed and returned the var
		// still the baz remembers the actual value of foo scoped variable a and its actual value
		