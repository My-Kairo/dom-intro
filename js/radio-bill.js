// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var addButton = document.querySelector(".radioBillAddBtn");
var calltotal = document.querySelector(".callTotalTwo");
var smstotal = document.querySelector(".smsTotalTwo");
var totall = document.querySelector(".totalTwo");
var color = document.querySelector(".orange");
//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalsms = 0;

//add an event listener for when the radio button is pressed
function textBillTotal(){
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    }

    //update the correct total
    if (billItemType === "call"){
        totalCalls += 2.75;
    }
    else if (billItemType === "sms"){
        totalsms += 0.75;
    }
    calltotal.innerHTML = totalCalls.toFixed(2);
    smstotal.innerHTML = totalsms.toFixed(2);
    var totalBill = totalCalls + totalsms;
    totall.innerHTML = totalBill.toFixed(2)


if (totalBill >= 30){
    color.classList.add("warning");
}
else if(totalBill <= 30){
    color.classList.remove("warning")
}
if (totalBill >= 50){
    color.classList.add("danger");
}
else if(totalBill <= 50){
    color.classList.remove("danger")
}
}
addButton.addEventListener('click', textBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
