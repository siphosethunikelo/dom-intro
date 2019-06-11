// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billItemTypeRadio = document.querySelector(".billItermTypeRadio");
var addToBillBtnElement = document.querySelector(".addToBillBn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
var RadioBtn = document.querySelector(".radioBillAddBtn");


var callTotalOne = 0;
var smsTotalOne = 0;
var totalCostOne = 0;

function radioButton(){
var checkedRadioBtn1 = document.querySelector("input[name='billItemType']:checked");


    var checkedRadioBtn = checkedRadioBtn1.value

    // billItemType will be 'call' or 'sms'
    if ( checkedRadioBtn === "call"){
        callTotalOne += 2.75;
    }
    else if ( checkedRadioBtn === "sms"){
        smsTotalOne += 0.75;
    }

    

// console.log(callTotalOneElement)
     callTotalTwoElement.innerHTML = callTotalOne.toFixed(2);
     smsTotalElement.innerHTML= smsTotalOne.toFixed(2);
     totalCostOne = callTotalOne + smsTotalOne;
    totalTwoElement.innerHTML = totalCostOne.toFixed(2);

    if(totalCostOne >= 50){
        totalTwoElement.classList.remove("warning");
        totalTwoElement.classList.add("danger");
    }else if(totalCostOne >= 30){
    totalTwoElement.classList.remove("danger");
        totalTwoElement.classList.add("warning");
    }else{
        totalTwoElement.classList.remove("warning");
        totalTwoElement.classList.remove("danger"); 
    }

}
RadioBtn.addEventListener('click', radioButton);