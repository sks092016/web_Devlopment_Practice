// date 27-04-2017 the following program demonstrate the imutablity utiulities 
// of the object 
// apart from setting the object property individually using the defineProperty() utility
// object can be set to immutable using the following utility
// 1. Object.preventExtension() after this execution no further property can be 
// added to the object

var obj1 = {
	a : 2
}

Object.preventExtensions(obj1) ;

obj1.b = 3 ;

console.log(obj1.a, obj1.b) ; // a, undefined "undefined" no further property can be added to the object

// 2. Object.sealed() this property not only executes preventExtension() on the object
// but also sets configurable property of every object to false. Hence nither you can add any property to the object
// nor you can reconfigure or delete the property

var obj2 = {
	c : 4 
}

Object.seal(obj2) ;

obj2.d = 5 ; //prevent extension of addition of any new property 

Object.defineProperty(obj2, "c", {writable : false}) ;

obj2.c = 6 ;

delete obj2 ;

console.log(obj2.c , obj2.d , Object.getOwnPropertyDescriptor(obj2, "c")) ; 

//  4 undefined { value: 4,
//  writable: false,
//  enumerable: true,
//  configurable: false }

// 3. Object.freeze() utility executes preventExtension() utility on the object 
// sets every property of the object to writable : false and configurable : false 

var obj3 = {
	e : 6 
}

Object.freeze(obj3) ; // writable : false , configurable ; false  Object.preventExtension() ;

obj3.f = 10 ; 

console.log(Object.getOwnPropertyDescriptor(obj3,"e"),
			Object.getOwnPropertyDescriptor(obj3,"f")) ;

/*{ value: 6,
  	writable: false,
  	enumerable: true,
  	configurable: false } , undefined*/