/*Date 21-01-2017 The following program demonstrate the HOisting property of Java Script 
 */
console.log(a); // Undefined : because of hoisting either could have resulted in reference Error 

foo(); // Same is variable hoisting the functions decleration are also get hoisted on the top of the program

var a = 2;

console.log(a);// 2

function foo(){
	console.log(a) ;
}

foo() ; // 2