/* Date 17-01-17 Program to demonstrate the function as scopes 
   without pulluting even the function names to the global scope
*/

var a = 2 ;

(function foo(global){
	
	var a = 3 ;

	console.log(a) ; // 3 Accessing the lexically 

	console.log(global.a) ; // 2 

})(window); // IIFE expretion window Object only works in browser

console.log(a);