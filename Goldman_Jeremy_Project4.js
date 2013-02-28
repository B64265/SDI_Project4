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
	
	var checkPattern = function(val, patternSym){
	
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
			var validOutput = "It looks like "+ val + " is a valid email!";
			var invalidOutput = "It looks like "+ val + " is not an email. :(";
			
			if(emailTest.substring(0, 1) == "@" && emailTest.substring(emailTest.lastIndexOf("."), emailTest.length) == "."){
	
					return validOutput;
	
				}else{
	
					return invalidOutput;
				}

			
		}
		
		
		
	}
	
	//Check for valid URL
	var checkWebPattern = function(val){
		
		var webTest = val.substring(val.indexOf("h"), val.lastIndexOf(":")+1);
		
		var validOutput = "It looks like "+ val + " is a valid web address!"
		
		var invalidOutput = "It looks like "+ val + " is not an web address. :("
		
		if(webTest == "http:" || webTest == "https:"){
	
				return validOutput;
	
			}else{
	
				return invalidOutput;
			}
		
	}
	
	
	//Uppercase Character Function
	var upChar = function(val, patternSym){
		
		var patternIndex = [];
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === patternSym){
				
				patternIndex.push(i);
			}
			
		}

		
	}
	
	
	// Return Object
	return{
		"checkNumeric": checkNumeric,
		"checkLength" : checkLength,
		"checkPattern" : checkPattern,
		"checkWebPattern" : checkWebPattern,
		"upChar" : upChar

	}
}


var newLib = new myLibrary();


// This is the Phone Number Test variables.  I declared some them here to keep things clean
// Otherwise it would look like a mess with all of my inputs inside of the function calls
// 

var myNumber = "224-366-7016";

var patternSym = "-";

var startNumCheck = myNumber.indexOf(patternSym);

var endNumCheck = myNumber.lastIndexOf(patternSym);

var endFinalNumCheck = myNumber.length;

var checkLenFunc = newLib.checkLength(myNumber, 12);

var checkPatternFunc = newLib.checkPattern(myNumber, patternSym);

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
	
	console.log("It looks like "+ myNumber + " is a valid phone number!");
	
}else{
	
	console.log("It looks like "+ myNumber + " is not a phone number.");
}

// Next I will be setting up for the Email Pattern check...
// and output the result

var myEmail = "jeremy@tinyappshack.com"

patternSym = "@";

var checkMailPatternFunc = newLib.checkPattern(myEmail, patternSym);

console.log("I will be checking if " + myEmail + " is an email...");

console.log(checkMailPatternFunc);



// Next I will be checking if a string is a valid URL...
// Interestingly I had used this exact idea to find out
// if I could shorten a URL in my very first iOS app I ever wrote (called Updtr).
// I was very proud of myself for it back then... oh to be young again.

var myURL = "http://www.tinyappshack.com";

var checkWebPatternFunc = newLib.checkWebPattern(myURL);

console.log("I will be checking if " + myURL + " is a valid web address...")

console.log(checkWebPatternFunc);


//  Next I will be making the first letter of each word upper-case
var myWord = "tiny app shack";

var patternSym = " ";

var upCharFunc = newLib.upChar(myWord, patternSym);

console.log(upCharFunc);








