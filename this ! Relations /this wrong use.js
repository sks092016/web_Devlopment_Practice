/* Date 10-04-2017 the following program demonstrate the plauisible wrong use of the this */

var a = 2; 

function foo(){

	var a = 2 ;

	bar() ;
}

function bar()
{
	console.log(this.a) ;
}

foo();/* results in the undefined output as we can not hijeck the lexical scope of the function foo from bar
 every time the bar is called it will look for its lexical scopeic variable a which is not defined 
 */