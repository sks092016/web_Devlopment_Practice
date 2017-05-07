// Date : 07-05-2017 the following program demonstrate the use of "in" operator and hasOwnProperty() 
//        method to check the existance of the object property inside the object

// 1. in : checks the object as well as the prototype chain of the object to find the property 
// 2. hasOwnProperty() : methods takes the property name as the argument and checks whether the property exists in the object or not

var obj1 = {

	a : "hi"
}

console.log("a" in obj1) ; // true
console.log("b" in obj1) ; // false
console.log("hasOwnProperty" in obj1) ; // true : as the hasOwnProperty exists somewhere in the prototype chain 

console.log(obj1.hasOwnProperty("a")) ; // true
console.log(obj1.hasOwnProperty("b")) ; // false
console.log(obj1.hasOwnProperty("hasOwnProperty")) ; // false : as the hasOwnProperty does not check the proptotype chain ans resulted in false


