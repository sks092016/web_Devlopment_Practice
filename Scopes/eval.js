/*
Date 17-01-2017 Program eval 
practice 
from YDKJS Scope & Clousers  
*/

//'use strict';

function foo(str, a){

	eval(str) ; //Hijacking the global Scope by evaluating string at run time
	
	console.log(a,b);
}

var b = 2 ; // Global Scope

foo("var b = 3", 1); // 1,3 in non strict mode 