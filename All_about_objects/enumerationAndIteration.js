// Date 09-05-2017 the following program demonstrates the enumeration of the object property . 
// The enumerable property defined at the time of the defining the proprty of of the object by 
// the explicit method an while setting other property such as writable , configurable , enumerable 
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
