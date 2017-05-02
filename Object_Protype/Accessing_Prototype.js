/*Date 29-01-2017 The program to demonstrate the sample Object Prototype Concept in Brief
--------------
OBJECT PROTOTYPE is kind of father of all the objects are created in the environment
This Object Prototype every time any object is created this object inherits some properties & methods
from the Object Prototype which are accessible to all the objects

Apart from the OBJECT PROTOTYPE There exists a Constructor Function for every genric 
Objects which adds some extra properties on every object creation

Hirarchy is as follows

OBJECT PROTOTYPE
	   |
	   V 
Default Generic Constructor
	   |
	   V
	 Object
*/
var obj1 = {
	name : "subhash"
}

var objStr = 45 ;
console.log(objStr.toString());


/*
Object.prototype.propOfValue = function(propValue){
	var matchingProp = [];
	var objStr = this.toString() ;

}
*/


