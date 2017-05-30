// Date 09-05-2017 the following program demonstrates the enumeration of the object property . 
// The enumerable property defined at the time of the defining the proprty of of the object by 
// the explicit method and while setting other property such as writable , configurable , enumerable 
// and value. The associated utilities which are used with the enumerable property are

// 1. for .... in Loop 2. propertyIsEnumerable([property name as string]) 3. Object.keys([object name as string])
// 4. Object.getOwnPropertyNames([object name as string])

var obj = {} ; 

Object.defineProperty(obj, "a", {value : 2 , enumerable : true}) ;

Object.defineProperty(obj, "b", {value : 3 , enumerable : false}) ;

// 1. for ... in loop

for(var k in obj){
	console.log(k, obj[k]) ; // a 2 ----------> this means since the other property of the object is not enumerable it is 
							 // not reflected in  the iteration
}

// 2. propertyIsEnumerable() ::: this method cheks whether the property is enumerable or not

console.log(obj.propertyIsEnumerable("a") , obj.propertyIsEnumerable("b")) ; // true false

// 3. Object.keys() :::: this method lists acually lists all the enumerable property of the object

console.log(Object.keys(obj)) ; // ["a"] not b as it is not enumerable 

// 4. Object.getOwnPropertyNames() enlists all the property of the object whether it is enumerable or not i contrast to the 
//    above method

console.log(Object.getOwnPropertyNames(obj)) ; // ["a", "b"]

// iteration over objects


try {
	for (var v of obj){
		console.log(v) ;
	}
} catch (e) {
	console.log("We didn't fund a iterator") ;
}

// for ... of loop looks for the @@iterator function for the object property to iterate over which is built 
// in for arrays which can be demonstrat as follows

// In contrast to the above the there has been many function or iterators are available for the array elements 
// however for Objects we have only some like for.....in but even that also does not iterate over the enumerable 
// elements. For arrays we have like for....in , for...of , forEach() , every() , some()

var myArray = ["akash", "gaurav", "avinash"] ;

for (var v of myArray){
	console.log(v) ;
} 
  // akash
  // gaurav
  // avinash

for (var v in myArray){
	console.log(myArray[v]) ;
}
  // akash
  // gaurav
  // avinash

function hi(el){
console.log("hi "+ el);
}
 
myArray.forEach(hi);

myArray.some(hi) ;

myArray.every(hi) ; 

// we have seen above that the for of loop does not iterate over the object as it require a inerator for doing iteration 
// as well as a next() function which internally points to the next object property

// in the following code we are going to define our own iterator 

var obj2 = {
	a : "Hello",
	b : "How are you"	
}

Object.defineProperty(obj2, Symbol.iterator, {writable: false , configurable : true , enumerable : false , 
	value : function(){
						var Obj = this ; 
						var objPropertyArray = Object.keys(Obj) ;
						var index = 0 ;

						return {
								next : function (){

												   return {
																value : function(){
																		
																		return Obj[objPropertyArray[index++]] + " Abishek" ;
																}(), 
																done : (index > objPropertyArray.length) 

													   	    } ;
												 
												 } 
							  } ; 
						}  } ); 



for (var v of obj2 )
{
	console.log(v) ;
}


