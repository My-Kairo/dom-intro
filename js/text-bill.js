// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var redR = document.querySelector(".red");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
textTotalAddBtn.addEventListener('click', textBillTotal);
//add an event listener for when the add button is pressed
function textBillTotal(){
    //get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    //update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2)


if (totalCost >= 50){
    redR.classList.add("danger");
}
else if(totalCost <= 50){
    redR.classList.remove("danger")
}
if (totalCost >= 30){
    redR.classList.add("warning");
}
else if(totalCost <= 30){
    redR.classList.remove("warning")
}
}

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
