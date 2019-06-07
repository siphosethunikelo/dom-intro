// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'-
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOneElem = document.querySelector(".callTotalOne");
var smsTotalOneElem = document.querySelector(".smsTotalOne");
var totalOneElem = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
var totalCost=0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered= billTypeText.value.trim();
    // update the correct total
    if ( billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if ( billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalOneElem .innerHTML = totalCost.toFixed(2);
   
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElem.classList.add("warning");
    }

}

        
   

addToBillBtn.addEventListener('click', textBillTotal);
