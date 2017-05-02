//Date 25-04-2017 the following code demonstrate the property descriptor 
//ofthe object property

obj1 = {
	a : 2 
}

// Object.getOwnPropertyDescriptor is a utility which gives the properties of property of the 
// object passed as arguments which is as follows 

var propDes = Object.getOwnPropertyDescriptor(obj1, "a") ;

console.log(propDes) ; 

// { 
//  value: 2, 
//  writable: true, 
//  enumerable: true, 
//  configurable: true 
// }

// 1. Value : its the actual value of the object property

// 2. Writable : whether the property is read only or not default is true i.e. property can be changed

// here we can use the utility the Object,defineProperty to create new property change the values of the 

// property configuration

Object.defineProperty(obj1, "b", {
	value : "Subhash",
	writable : true,
	enumerable : true,
	configurable : true
} );

console.log(obj1.b) ;

// if writable property is set to be false than we can not amend the property

// like 

Object.defineProperty(obj1, "b", {
	value : "Rajesh",
	writable : false, // makeing b as not writable 
} );

console.log(obj1.b) ; // Rajesh 

obj1.b = "soni" ; // a futile try for change of value 

console.log(obj1.b) ; // Rajesh 

// 3 Configurable 

// if this property is set to false once than no property of the object 
// Property can be further configurable means it is a one way process 

// example 

Object.defineProperty(obj1, "c", {
	value : "Subhash",
	writable : true,
	enumerable : true,
	configurable : false // making property further unconfigurable 
} );

Object.defineProperty(obj1, "c", {
	value : "SKS",
} );

console.log(obj1.c) ;

Object.defineProperty(obj1, "c", {
	value : "SKS",
	writable : false // Since the property is set as non configurable 
} ); // the writable property can not be set as false 

obj1.c = "sunita" ;

console.log(obj1.c) ; // "SKS" not "sunita" as the property cannot be reconfigured