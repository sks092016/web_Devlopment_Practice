// Date 27-04-2017 the following program defines to define the explicit function
// toset and get the values of the object property.However internally 
// [[get]] and [[put]] utilities are defined in the JavaScript Engine
// to handle the property value setting and getting function but we can seperatly defines the 
// getter and setter function inside the object to get and set the value of the property


// 1. getter & setter 

// getter : this is the function defined inside the object defininition the syntex of the getter is 
// 			get [name of the property](){
				// any function logic goes here 
//				}
// 			whenever the value of the proerty is used in the program this function will be executed 
// 			for now we can understand that we can manupulate the value of the property and to reference the property 
// 			a convension is used like shown in the following program 
//          this._a_
var obj1 = {
	// getter for a 
	get a() {
		return this._a_ + " This is the value of a"; 
	},

// setter : this is a function defined inside the object definition and generally used to store the value inside the 
// 			property of the object the setter also follows the same syntax as getter however it gets executed whenever 
//			someone trys to store the value inside the property the value can be accessed via same method as above
	set a(val){
		this._a_ = val ;
	}
}

obj1.a = 10 ;

console.log(obj1.a) ;

// in this program we are going to define some more getter and setter for the object

var obj2 ={
	get prop1(){
		return  "we added something " + this._prop1_;
	},

	set prop1(val){
		this._prop1_ = val ;
	}
}

obj2.prop1 = "this is first property" ;

console.log(obj2.prop1) ; // we added something this is first property

// important findings from the above 
// 1. whenever a one among getter or setter is defined for the object property and if it is referencing the 
//	  value of the the property by using the this._[name of the properyt]_ than the other (getter or setter) must be defined 
//	  for the object
// 2. we can not pass any parameter / argument to the getter functions 

var obj3 = {
	set foo(val){
		this._foo_ = val + "bar" ;
	}
}

obj3.foo = "baz" ;

console.log(obj3.foo) ; // results in undefined