// Date 25-05-2017 the following program demonstrate the [[Prototype]] chain which is actually the 
// the backbone of Java Script. The prototype chain always exists in the Objects of the JavaScript 
// This chain links some default utilities or methods or property through which we use our objects 
// like there have been various method such as [[GET]], [[SET]], defineProperty(), getOwnPropertyDescriptor()
// seal(), freeze(), hasOwnProperty(), in, for...each, for...some, for...every, for...of, for...in
// typeof, instanceof, Object.keys(), Object.getOwnPropertyNames() etc . By this arguent and example 
// we want to establish that if the Prototype Chain would not have been existed than we would have to 
// either use the Either the Class oriented apraoach or we have to define the properties explicitly
// in the Object itself .


// The following program simply demonstrate how chain is created and what are its efect

var obj1 = {
	a  : "hi"
}

var obj2 = Object.create(obj1)  ;

console.log(obj2.a) ; // hi..... but we did know the we never defined any property inside the 
					  // obj2 but the magic happened because of that mysterious link which was 
					  // created between obj2 and obj1 due to Object.create() however we can check whether 
					  // the property ever existed in the object

console.log(obj2.hasOwnProperty("a")) ; // false as ot checks only at the current level of hirarchy 

console.log("a" in obj2) ; // true however the in Operator checks the complete chain of prototype till it gets the property of similer name 
						   // or none 
// Object Prototype  and Shadowing of the property
 
// in the above case if we declare a property in the Obj2 named as 'a' than the property in the obj1 will be shadowed

// however the shadowing involves some very complex processes at the JS engine's end 

// 1. if the some property which we want to shadow accedently or purposefully the property which is NOT readonly pward in the chain than
//    the property will be shadowed downward in the chain i.e. we can create a property with the same name downward in the chain
//	   and for this no error will be issed 		 

obj2.a = "hello" ;

console.log(obj1.a , obj2.a) ; // hi hello as now both the objects contains the property "a" in them 

console.log(obj2.hasOwnProperty("a")) ; // true as now obj2 contains property a in itself 

// 2. 2nd way of shadowing is as follows if the property anywhere in the upward chain is read only than the above method 
// will result in error if we create the property explicitly however we have to create the properties f the downward object 
// by the defineProperty() explicitly.

Object.defineProperty(obj1, "b", {value : "Ohooo", writable : false}) ;

obj2.b = "OOOhooo" ;

console.log(obj2.b) ; // Ohooo as we can not shadow the non writable object in the upward chain 

// however we can still shadow 'b of object1'  following method

Object.defineProperty(obj2, "b", {value : "OOOhooo"});

console.log(obj2.b) ; // OOOhoooo the property of obj1.b is shadowed
`
