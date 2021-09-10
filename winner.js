var arr = [1,2,3,4,5,6,7,8,9]

module.exports = (box)=>{

	var attr = box.attr("id");
	switch(attr)
	{
		case 'one': arr[0]=box.text();
		var a = test(0);
			return a;

		case 'two': arr[1]=box.text();
		var a = test(1);
			return a;
		case 'three': arr[2]=box.text();
		var a = test(2);
			return a;
		case 'four': arr[3]=box.text();
		var a = test(3);
			return a;
		case 'five': arr[4]=box.text();
		var a = test(4);
			return a;
		case 'six': arr[5]=box.text();
		var a = test(5);
			return a;
		case 'seven': arr[6]=box.text();
		var a = test(6);
			return a;
		case 'eight': arr[7]=box.text();
		var a = test(7);
			return a;
		case 'nine': arr[8]=box.text();
		var a = test(8);
			return a;

	}
	
}

function test(Number) {
	if((arr[0]===arr[1])&&(arr[1]===arr[2])){
		
		return arr[0]+" Won";
	}
	else if((arr[0]===arr[3])&&(arr[3]===arr[6])){
		
		return arr[0]+" Won";
	}

	else if((arr[0]===arr[4])&&(arr[4]===arr[8])){
		
		return arr[0]+" Won";
	}

	else if((arr[6]===arr[7])&&(arr[7]===arr[8])){
		
		return arr[6]+" Won";
	}

	else if((arr[2]===arr[5])&&(arr[5]===arr[8])){
		
		return arr[2]+" Won";
	}

	else if((arr[2]===arr[4])&&(arr[4]===arr[6])){
		
		return arr[2]+" Won";
	}

	else if((arr[1]===arr[4])&&(arr[4]===arr[7])){
		
		return arr[1]+" Won";
	}

	else if((arr[3]===arr[4])&&(arr[4]===arr[5])){
		return arr[3]+" Won";
	}
		else
			return Number;
	
}