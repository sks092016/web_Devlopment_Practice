/*
Date 17-01-17 Program is Cheating Scopes with "with" Keyword 
Here with is not working properly! However the use of with & eval should be 
avided in the code as these degrades the performance consederably
*/

//'use strict'; 

function foo(obj){
	with (obj){
		a : 2 ;
	}
}

var o1 = {
	a : 1
}

foo(o1);

console.log(o1.a); // 2

var o2 = {
	b : 1
}

foo(o2);

console.log(o2.a); // undefined 

console.log(a) ;// 2 in non strict mode 

