// Date 27-04-2017 the following program defines to define the explicit function
// toset and get the values of the object property.However internally 
// [[get]] and [[put]] utilities are defined in the JavaScript Engine
// to handle the property value setting and getting function but we can seperatly defines the 
// getter and setter function inside the object to get and set the value of the property


// 1. getter & setter 

var obj1 = {
	// getter for a 
	get a() {
		return this._a_ + " This is the value of a"; 
	},
	// setter for a
	set a(val){
		this._a_ = val ;
	}
}

obj1.a = 10 ;

console.log(obj1.a) ;

