//Jeremy Goldman
// SDI Term:1302
// Project 4
// This Library is gonna rock ;)
//
// This library is going to have all of the more generic functions,
// And my specific calls and data for the problem will be at the bottom.
// I also split each funciton into its own output so that you can see it works. :)

var myLibrary = function(){
	
	// Check Numeric Function
	var checkNumeric = function(val){
		
		if(isNaN(val)){
			
			return false;
			
		}else{
			
			return true;
			
		}
		
	}
	
	
	//Check length
	var checkLength = function(val, desiredLength){
	
		if(val.length === desiredLength){
			
			return true;
			
		}else{
			
			return false;
		}
		
	}
	
	// Check Pattern Function
	
	var checkPattern = function(val){
	
	var patternIndex = [];
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === patternSym){
				
				patternIndex.push(i);
			}
			
		}
		
		if(patternSym == "-"){
			
			if(patternIndex[0] == 3 && patternIndex[1] == 7){
			
				return true;
			
			}else{
			
				return false;
			}
			
		}else if (patternSym == "@"){
			
			
		}
		
		
		
	}
	
	
	// Return Object
	return{
		"checkNumeric": checkNumeric,
		"checkLength" : checkLength,
		"checkPattern" : checkPattern
	}
}


var newLib = new myLibrary();


// This is the Phone Number Test variables.  I declared some them here to keep things clean
// Otherwise it would look like a mess with all of my inputs inside of the function calls
// 

var myNumber = "224-366-7016";

var patternSym = "-";

var startNumCheck = myNumber.indexOf("-");

var endNumCheck = myNumber.lastIndexOf("-");

var endFinalNumCheck = myNumber.length;

var checkLenFunc = newLib.checkLength(myNumber, 12);

var checkPatternFunc = newLib.checkPattern(myNumber);

var checkNumeric1 = newLib.checkNumeric(myNumber.substring( 0 , startNumCheck));

var checkNumeric2 = newLib.checkNumeric(myNumber.substring( 4 , endNumCheck));

var checkNumeric3 = newLib.checkNumeric(myNumber.substring( endNumCheck+1 , endFinalNumCheck));

//Output for the phone number validation

console.log("I will be checking if " + myNumber + " is a phone number.")

console.log("Does this length match the desired length? " + checkLenFunc);

console.log("Does it match the desired pattern? " + checkPatternFunc);

console.log("Is section 1 a number? " + checkNumeric1);

console.log("Is section 2 a number? " + checkNumeric2);

console.log("Is section 3 a number? " + checkNumeric3);

if(checkLenFunc && checkPatternFunc && checkNumeric1 && checkNumeric2 && checkNumeric3 == true){
	
	console.log("it looks like "+ myNumber + " is a valid phone number!");
	
}else{
	
	console.log("it looks like "+ myNumber + " is not a phone number.");
}
