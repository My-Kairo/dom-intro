//var billStringElement = document.querySelector(".billString");

var billStringElement = document.querySelector(".billString");//Get the comma seperated bill string containing call or sms strings
var calculateBtnElement = doocument.querySelector(".calculateBtn");//Button to press to calculate the total
var billTotalElement = document.querySelector(".billTotal");//Where the total should be displayed


// add event listener
function calculateBtnClicked(){
    var billString = billStringField.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);
 