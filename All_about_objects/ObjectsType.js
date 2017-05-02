// Date 25-04-2017 The following code demonstrate the different type of 
// objects used in the Javascript 
// 1. String 

var myStr = "my name is Subhash" ;

console.log(typeof myStr)  ; // string not object

console.log(myStr instanceof String) ; // false as currently it is not instance of String

// String is the primitive object or a wrapper class for every string
// but since the myStr was not declared as the String Object the above 
// statement is turned out to be false however the following statements 
// declare the myStr1 as String object by using the "new" constructor 
// call

var yourStr = new String("your name is Brijesh") ;

console.log(typeof yourStr)  ; // object 

console.log(yourStr instanceof String) ; //true 

// However when it coms to use the various property of strings such as length 
// etc all the string are automatically coerced into objects and generally the 
// everything goes unnoticed

// -----------------------------------------------------------------

// 2 Contents or accessing the object property 

obj1 = {
	a : 2 
}

// Accessing the propety 

// one way 

console.log(obj1.a) ;

// another way

console.log(obj1["a"]) ; // inside the [] must be a string either the engine will throw error

// Defining the property 

// one way 

obj1.b = "Kamlesh" ;

// another 

obj1["c"] = "saini" ;

// even the keyword and numbers are accepted in property

obj1[true] = "brijesh" ;

obj1[34] = "Pravesh" ;

obj1.false = "Rahul" ;

obj1.obj1 = "Ranjan" ;

console.log(obj1["true"],obj1["34"],obj1.c,obj1.b,obj1.a,obj1.false,obj1.obj1) ;

// The above statements states basically any thing can be defined as object property

// computed property  of objects 

var postfix =  "_age" ;

obj1["saini"+postfix] =  45 ; 

console.log(obj1.saini_age) ; // 45

// Arrays : 

// Arrays are also objects however their structure is quite systematic but apart from 
// defining array ou can define the external property of any array like objects

var myArray = [34,"sonu",true] ;

myArray["that"] = "this" ;

myArray["2"] = false ; 

// see even after defining the external property of Array object  and mentioning
// propety name as string but number as value by bracket
// notation the array considered that as the index of itself and mutated the value 
// !!!!! therefore utmost care shouls be taken in such caess

console.log(myArray.that,myArray["2"],myArray[2],myArray["1"]) ;

// Please remmember whatevr goes inside the [] whether its a number or number in the form 
// of string like ["10"] array always treat that like index of itself
