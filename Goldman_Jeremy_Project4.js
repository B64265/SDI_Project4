//Jeremy Goldman
// SDI Term:1302
// Project 4
// This Library is gonna rock ;)

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
	
	// Check String Function
	
	var checkPattern = function(val){
	
	var patternIndex = [];
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === "-"){
				
				patternIndex.push(i);
			}
			
		}
		if(patternIndex[0] == 3 && patternIndex[1] == 7){
			
			return true
		}else{
			
			return false;
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

console.log("Is this a number? "+newLib.checkNumeric(3));

console.log("Does this length match the desired length? " + newLib.checkLength("224-366-7016", 12));

console.log("This is the return for checkPattern:" + newLib.checkPattern("224-366-7016"));


