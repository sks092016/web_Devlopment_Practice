// date 23-04-2017 the following program demonstrates 
// the precedence order of the 
// rules that governs the "this" bindings

// First one implicit binding vs explicit binding 

function foo(){
	console.log(this.a) ;
}

obj1 = {
	a : 2 ,
	foo : foo
}

obj2 = {
	a : 4 ,
	foo : foo
}

// implicit binding 

obj1.foo() ; // 2

obj2.foo() ; // 4

// explicit binding

obj1.foo.call(obj2) ; // 4 i.e obj2 wins hence the explicit binding 

obj2.foo.call(obj1) ; // 2 i.e obj1 wins hence the explicit binding 

// hence explicit has higner precedence over implicit binding 

// Now implicit binding vs New binding 

function fn(something){

	this.a = something ;

}

obj3 = {
		fn : fn 
} 

obj4 = {} 

obj3.fn(3) ;

console.log(obj3.a) ; // 3

obj3.fn.call(obj4, 4); 

console.log(obj4.a) ; // 4

var bar = new obj3.fn(5) ; 

console.log(bar.a) ; // 5 new binding is overideing the explicit binding

console.log(obj3.a) ; // 3 

// hence the new binding has more precendence over implicit binding

// Now the New Binding vs Hard Binding 

obj5 = {} ;

var baz = fn.bind(obj5) ;

baz(6) ; 

console.log(obj5.a) ; // 6 

var bat = new baz(7) ; 

console.log(bat.a) ; // 7 new yet again wins with the hard binding 

// hence New binding has more precedence with hard binding and so with 
// explicit binding as the hard binding can not be overriden by explicit 
// binding 

console.log("The Order of precedence is New > Hard > Explicit > implicit > default binding of THIS") ;
