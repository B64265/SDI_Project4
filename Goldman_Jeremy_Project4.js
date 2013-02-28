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
	
	var checkString = function(val){
	
		var strLen = val.length;
		for(var i = 0; i <=strLen; i++){
			
			if(val.substring(i, i+1) === "-"){
				
				return i;
			}
			
		}
	
	
	}
	
	
	
	// Return Object
	return{
		"checkNumeric": checkNumeric,
		"checkLength": checkLength
		
	}
}


var newLib = new myLibrary();

console.log("Is this a number? "+newLib.checkNumeric(3));

console.log("Does this length match the desired length? " + newLib.checkLength("224-366-7016", 12));


