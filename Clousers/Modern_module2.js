/* Date 24-01-2017 The program demonstrate the extension of the previous version of the module */
var coolmodule = function coolModule(id){
function change(){
	//modifying the publicAPI reference 
	publicAPI.identify = identify2 
}

function identify1(){
	console.log(id);
}

function identify2(){
	console.log(id.toUpperCase());
}

var publicAPI = {
	change : change ,
	identify : identify1 
}

return publicAPI ;

}("It is so Cool");

coolmodule.identify();
coolmodule.change(); 
coolmodule.identify();