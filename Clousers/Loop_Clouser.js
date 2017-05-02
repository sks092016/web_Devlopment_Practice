/* Date 22-01-2017 Program which demonstrate the clouser & loops */

'use strict' ;

for(var i = 0; i < 6 ; i++ ){

	// body... 
	
	function foo(){

	var j = i ;	
	/*Settimeout is the utilities which works on Callbacks : Means if you pass a function definition 
	As arguments then it keeps the definition to itselfs and call back the function after specified 
	time mention in the other arguments. The thing here to note that you dont have to explicitly call
	function to get it executed like foo(); so on ....*/		
		setTimeout( function foo () {

			// body... 
			console.log("Hello " + j);
		
		}, i * 1000) ;

	}

	foo(); // hello 'i' it rembers its lexical scope as j and deplays its value
} 


