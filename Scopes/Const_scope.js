/* Date 18-01-17 Demonstrating that the const variables are block scoped even in simple block 
where other variables are not */

'use strict';
{
	const a = 10 ; // blocked scoped 
	var b = 20 ; // global scoped 
}

try {
	// statements
	console.log(a) ; // result in Reference Error
} catch(e) {
	// statements
	console.log(e);
}
console.log(b); // 20
