/*Date 24-01-2017 the program is a more modern version of the Modules used today in JavaScript*/
var myModules = (function manager () {
	// body... 
	var modules = {} ;

    /*The define function of the module actually defining a object named as "name" arguments
     and where impl is a function which returns a object containg some internal methods or property
     whereas the deps is an array of arguments or only the object names as string which are being passed to the 
     function impl by the apply. It means if the impl function does not excepts any arguments then the 
     deps array will be empty and if it requir 2 arguments then the array will contain 2 arguments.
    */

	function define(name, deps, impl){
		
	/* a life line of the code Here we are converting or assiging a object to the deps array
	for each of its string values one by one. Means if deps contains string as bar then the actual 
	object named bar which is stored in modules array will be replaced here.*/

		for(var i = 0 ; i < deps.length ; i++){
			deps[i] = modules[deps[i]];
		}
	/*The apply function actually calls the impl with the arguments in deps array as modified above 
	 which are actually objects */
		modules[name] = impl.apply(impl, deps);	
	}

	function get(name){
		return modules[name];
	}

	return {
		define : define,
		get : get
	}
})();
	
myModules.define("bar",[],function(){
	function hello(who){
		console.log('Let me Introduce myself I am ' + who) ;
	}
	return{
		hello : hello
	}
})

myModules.define("foo",[],function(){
	
	function awosome(act){

		console.log("And I " + act);
	}

	return{
		awosome : awosome
	}
})

myModules.define("baz",["bar","foo"],function(Baz,Foo){
	
	var activity = "eats" ;
	var myName = "Hippo" ;

	function myIntro(){

	console.log(Baz.hello(myName) + Foo.awosome(activity));	  
	
	}

	return {
		myIntro : myIntro
	}
})

var newMod = myModules.get("foo");

newMod.awosome("drinks");
console.log(myModules);
