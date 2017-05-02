/* 
Date 17-01-17 Modern Module Pattern 
*/

var a = 2;

(function foo(def){
	
	def(window) ; // WINDOW object is works in browser

})(function IIFE(global){ // function as parameter 

	var a = 3 ;
	
	console.log(a); // 3 lexically scoped a 
	
	console.log(global.a); // 2 globally scoped a 

});