 /*Date 11-04-2017 the following progrsm demonstrate he binding of the this with the defferent objects 
 the folloing program will demonstrate the two typw of This binding 
 1. Default Binding : i.e. to the global object
 2. Implecit Binding : i.e. the the object through which a function or a reference is mae or called 
 
 Alothough all the bindings of this depends on the call site i.e. where the call is made 
 */

// 1 The default bining 

var a = "oops global" ;

function foo(){

 	 	console.log(this.a) ;
}

foo(); // the call site 2 since the sublime do not detect the global object this code actually works on browsers

// however the use of strict mode prohibits the default binding of the this 

// 2. Implecit binding 

obj1 = {

	a : 43 ,
	foo : foo 
}

obj1.foo() ; // call site and the out is 43 as now the obj1 owns the this hence the this binds to obj1

			// however in implecit binding the top / last level of the object owns the this like follows

obj2 = {

	a : 55 ,
	obj1 : obj1 
} 

obj2.obj1.foo() ; // this is another call site but out put still be 43 as the toplevel object is here is 
				  // is obj1 i.e. obj2 is calling obj1 which is referencing the function hence the obj1 
				  // is the last or the top level object where actual function call is happening 

// 3 Implicitly default binding 



var bar =  obj1.foo ;// here it is not the call site as the function is not called here rather it is just an assignment expression
					// of function or just a function is being passed here

bar() ; // like the above the code will return undefined as the code will not detect the global object  can be tried on browser

// 4 another example of function refernce passing on to the function using the implecitly looking binding 

function foo1(fn){

	fn() ;
}

foo1(obj1.foo) ;// call site again result undefined here but oops global on browser

// 4  explict binding 
// explicit binding refers to forcing a function to refer perticular object 
// and bind its this to some object through which it is called generally this is done 
// by the call() and apply() utility. Every object in the Javascript has access to these utilities 

// for example 

obj3 = {

 	a : "this is object 3"
}

foo.call(obj3); // here we are explicitly assigning foo's this to obj3

// 4 Hard Binding 
// binding the perticular function with an object such that o other assignment works for 
// the this of that function 

obj4 = {
	a : "This is object 4"
}

var bar =  function(){

	return foo.call(obj4) ; 
} // we are here hard codein the function bar to use object4 to use its this reference always no matter what

bar() ; // this is object 4 

bar.call(obj3) ; // this is object 4 

// another example of hard binding 

obj5 = {
	a : 100
}

function foos(something){
	console.log(this.a , something) ;
	return this.a + something ;
}

var baz =  function() {
	return foos.apply(obj5, arguments) ;
} // here we are again hard coding function baz to use object 5 as its this refernce

var bat = baz(3) ; // 100 3 
console.log(bat) ; // 103

// if we talk then more formally the application ofhard binding is as follows

obj6 = {
	a : 200
}

function bind(fn, obj) {

	return function(){
		 return fn.apply(obj, arguments) ;
	} ;
}

var fuzz = bind(foos,obj6) ; // the bind function return a function to fuzz which is hard coded to use perticular function and object 
// which further 

var b = fuzz(3) ;

console.log(b) ;

// The bind utility mentioned above is so popoler that in ES5 of javascript it included 
// in the liberary like as follows

var c = foo.bind(obj3) ; // this bind utility returns a function which is hardcoded with the original functionand the object which you explicitly 
// pass to this utility 

c() ;
// 5 New Binding 

// the new keyword in JS creates a new object from a thin air which is basically 
// completely empty and nothing in it li {} but the function before which the new is placed
// that function's this got binds to this newly created object 

// like 

function food(e) {
	this.a = e ;
}
var d =  new food(3) ;

console.log(d.a) ; // 3

