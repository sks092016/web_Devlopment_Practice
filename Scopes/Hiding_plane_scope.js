\/* 
   Date 17-01-17 Program to demonstrate the hiding of the 
   doSomethingElse & variable b inside the scope of doSomething 
*/
function doSomething(a){

	function doSomethingElse(a){
	
		return a-1;
	
	}

var b = a + doSomethingElse(a * 2);

console.log(b * 3);

}

doSomething(2) ; // 15 