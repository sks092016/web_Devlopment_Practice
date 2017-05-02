/*Date 21-01-17 Program demonstrate the Hoisting between Var & Function */
foo() ;

var foo ;

function foo(){  // this decleration was hoisted first then variable var 
 	console.log('1');
}

var foo = function(){
	console.log('2');
}