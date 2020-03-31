var bill = 100.23;

function gratuityCalc(bill)
{
	return bill * 1.2;

}

var total = gratuityCalc(bill).toFixed(2);
console.log(total);