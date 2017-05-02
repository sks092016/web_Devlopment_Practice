/*Date 22-01-2017 Program demonstrate the practical example of clouser */

function foo (msg) {
	// body... 
	setTimeout(function timer(){ //Though we have transfered the timer()to settimeout but it remmembers the lexicalscope of foo 
		console.log(msg) ;
	},2000) ;
}

foo("Hello Clouser") ;
