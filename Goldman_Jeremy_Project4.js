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
	
	// Check Pattern Function (for phone and email)
	
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
			
			var emailTest = val.substring(val.indexOf(patternSym), val.lastIndexOf(".")+1);
			return emailTest;
			
		}
		
		
		
	}
	
	var checkWebPattern = function(val){
		
		var webTest = val.substring(val.indexOf("h"), val.lastIndexOf(":")+1);
		return webTest;
		
	}
	
	
	// Return Object
	return{
		"checkNumeric": checkNumeric,
		"checkLength" : checkLength,
		"checkPattern" : checkPattern,
		"checkWebPattern" : checkWebPattern
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

// Next I will be setting up for the Email Pattern check...

var myEmail = "jeremy@tinyappshack.com"

patternSym = "@";

var startMailCheck = myEmail.indexOf("@");

var endMailCheck = myEmail.lastIndexOf(".");

var endFinalMailCheck = myEmail.length;

var checkMailPatternFunc = newLib.checkPattern(myEmail);


//Output for the phone number validation

console.log("I will be checking if " + myEmail + " is an email...")

console.log("Does it match the desired pattern? " + checkMailPatternFunc);

if(checkMailPatternFunc.substring(0, 1) == "@" && checkMailPatternFunc.substring(checkMailPatternFunc.lastIndexOf("."), checkMailPatternFunc.length) == "."){
	
	console.log("it looks like "+ myEmail + " is a valid email!");
	
}else{
	
	console.log("it looks like "+ myEmail + " is not an email. :(");
}


// Next I will be checking if a string is a valid URL...
// Interestingly I had used this exact idea to find out
// if I could shorten a URL in my very first iOS app I ever wrote (called Updtr).
// I was very proud of myself for it back then... oh to be young again.

var myURL = "http://www.tinyappshack.com";

var checkWebPatternFunc = newLib.checkWebPattern(myURL);


console.log("I will be checking if " + myURL + " is web address...")

console.log("Does it match the desired pattern? " + checkWebPatternFunc);

if(checkWebPatternFunc.substring(0, 1) == "h" && checkWebPatternFunc.substring(checkWebPatternFunc.lastIndexOf(":"), checkWebPatternFunc.length) == ":"){
	
	console.log("it looks like "+ myEmail + " is a valid web address!");
	
}else{
	
	console.log("it looks like "+ myEmail + " is not an web address. :(");
}




