function totalPhoneBill(billStr) {
	console.log(billStr);
  var bill = billStr.split(", ");
  var total =0;
  //var callprice = call * 2.75;
  //var smsprice = sms * 0.65;
  
  for(var i=0; i<bill.length; i++) {
    if(bill[i] === 'sms'){
    total += 0.65;
    }
    else if(bill[i] === 'call') {
    total += 2.75;
    }
  }return "R" + total.toFixed(2);
}