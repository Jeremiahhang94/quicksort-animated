// JavaScript Document

function RandomGenerator()
{
	
}


RandomGenerator.generate = function(maxNumber, minNumber, quantity, addLength)
{
	var shouldAddLength = (addLength == null) ? true : addLength;
	
	var numbers = new Array();
	for( var i = 0; i<quantity; i++)
	{
		var number = Math.floor(Math.random()*(maxNumber - minNumber) + minNumber);
		numbers.push(number);
	}
	
	if(shouldAddLength)
		numbers.push(maxNumber);
		
	return numbers;
	
}
