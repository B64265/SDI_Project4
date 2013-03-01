//Jeremy Goldman
// SDI Term:1302
// Project 4
// This Library is gonna rock ;)

var myLibrary = function(){
	
	
	var phoneNumValidation = function(val, desiredLength, patternSym){
		
		if(val.length === desiredLength){
			
			//return true;
			
			var patternIndex = [];
	
			var strLen = val.length;
			for(var i = 0; i <=strLen; i++){
				
				if(val.substring(i, i+1) === patternSym){
					
					patternIndex.push(i);
				}
				
			}
			
			if(patternSym == "-"){
				
				if(patternIndex[0] == 3 && patternIndex[1] == 7){
				
					//return true;
					
					var startNumCheck = val.indexOf(patternSym);
					var endNumCheck = val.lastIndexOf(patternSym);
					var endFinalNumCheck = val.length;
					var checkNumeric1 = val.substring( 0 , startNumCheck);
					var checkNumeric2 = val.substring( 4 , endNumCheck);
					var checkNumeric3 = val.substring( endNumCheck+1 , endFinalNumCheck);

					if(isNaN(checkNumeric1)){
			
						return false;
						
					}else{
						
						//return true;
						if(isNaN(checkNumeric2)){
				
							return false;
							
						}else{
							var validOutput = "It looks like "+ val + " is a valid phone number!";
							var invalidOutput = "It looks like "+ val + " is not a phone number. :(";
							
							//return true;
							if(isNaN(checkNumeric3)){
					
								return invalidOutput;
								
							}else{
								
								return validOutput;
								
							}
							
						}
						
					}
				
				}else{
				
					return false;
				}
				
			}else {
			
				return false;
			
			}
		
			
		}else{
			
			return false;
		}
		
		
	}
	
	// Check Pattern Function ( email)
	
	var checkPattern = function(val, patternSym){
	
	var patternIndex = [];
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === patternSym){
				
				patternIndex.push(i);
			}
			
		}
		
		if(patternSym == "@"){
			
			var emailTest = val.substring(val.indexOf(patternSym), val.lastIndexOf(".")+1);
			var validOutput = "It looks like "+ val + " is a valid email!";
			var invalidOutput = "It looks like "+ val + " is not an email. :(";
			
			if(emailTest.substring(0, 1) == "@" && emailTest.substring(emailTest.lastIndexOf("."), emailTest.length) == "."){
	
					return validOutput;
	
				}else{
	
					return invalidOutput;
				}
			
		}else{
			
			return false;
		}
		
		
		
	};
	
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
		
	};
	
	
	//Uppercase Character Function
	var upChar = function(val, patternSym){
		
		var patternIndex = [0];
		var strConvertedArray = [];
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === patternSym){
				
				patternIndex.push(i);
			}
			
		}
		for(var x = 0; x < patternIndex.length; x++){
			if (x == 0){
				
				var tmpVal = val.charAt(patternIndex[x]).toUpperCase() + val.slice(patternIndex[x]+1, patternIndex[x+1]);
				
				strConvertedArray.push(tmpVal);
				
			}else{
			
			 	var tmpVal2 = val.charAt(patternIndex[x]+1).toUpperCase() + val.slice(patternIndex[x]+2, patternIndex[x+1]);
			 	
			 	strConvertedArray.push(tmpVal2);
			 	
			}
		}
		
		var finalString = strConvertedArray.join(" ")
		
		return finalString;
	};
	
	// This function is going to format the number
	// to a specific decimal point... So Fun :) 
	
	var toDecimalPoint = function(fullNum, decimalPoints)
	{
		var number = fullNum;
		
		var decimals = decimalPoints;
		
		number = number.toFixed(decimals);
		
		return number;
	};
	
	
	//String to Number Conversion Function
	
	var strToNum = function(str){
	
		var number = parseInt(str);
		
		if(typeof number == 'number'){
			
			return number + " is a number!";
			
		}else{

			console.log("Not a Number.... :(");
		
		}
		
		
	};
	
	// Return Object
	return{
		"checkPattern" : checkPattern,
		"checkWebPattern" : checkWebPattern,
		"upChar" : upChar,
		"toDecimalPoint" : toDecimalPoint,
		"strToNum" : strToNum,
		"phoneNumValidation" : phoneNumValidation

	}
};


var newLib = new myLibrary();


// This is the Phone Number Test variables.  I declared some them here to keep things clean
// Otherwise it would look like a mess with all of my inputs inside of the function calls
var myNumber = "847-697-1492";
var patternSym = "-";
console.log(newLib.phoneNumValidation(myNumber, 12, patternSym));



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
console.log("I will be checking if " + myURL + " is a valid web address...");
console.log(checkWebPatternFunc);


//  Next I will be making the first letter of each word upper-case
var myWord = "tiny app shack";
var patternSym = " ";
var upCharFunc = newLib.upChar(myWord, patternSym);
console.log("Let's see what " + myWord + " looks like with caps on the first letter of each word --> ", upCharFunc);



//Next will be the format a number function!
var myNumber = 3.14159;
var desiredDecimals = 2;
var toDecFunc = newLib.toDecimalPoint(myNumber, desiredDecimals);
console.log("Lets see how the fixed decimal function works! The number is " + myNumber + " --> ", toDecFunc);



// For my next trick, I'll magically transform a string to a Number! (ooohhhh, ahhhhh)
var myNumString = "42";
var strToNumFuc = newLib.strToNum(myNumString);
console.log("Let's check to see if " + myNumString + " is a number or a string --> ", strToNumFuc);



