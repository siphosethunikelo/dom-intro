// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
var addToBillBtnElement = document.querySelector(".addToBillBn");
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var SettingsBillAddBtnElem = document.querySelector(".SettingsBillAddBtn");

var callTotalSettingElem = document.querySelector(".callCostSetting");
var smsTotalSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettings = document.querySelector(".updateSettings");

var callCostSettings = 0;
var smsCostSettings = 0;
var totalCostSettings = 0;

function settingsButton() {
    var checkedSettingsBtnElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");


    var checkedSettingsBtn = checkedSettingsBtnElem.value

    // billItemType will be 'call' or 'sms'
    if (checkedSettingsBtn === "call") {
        callCostSettings += Number(callTotalSettingElem.value);
    }
    else if (checkedSettingsBtn === "sms") {
        smsCostSettings += Number(smsTotalSettingElem.value);
    }

    callTotalSettingsElem.innerHTML = callCostSettings.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsCostSettings.toFixed(2);
    totalCostSettings = callCostSettings + smsCostSettings;
    totalSettingsElem.innerHTML = totalCostSettings.toFixed(2);

    if (totalCostSettings >= criticalLevelSettingElem.value) {
        totalSettingsElem.classList.add("danger");
        SettingsBillAddBtnElem.disabled = true;
    }
    else if (totalCostSettings >= warningLevelSettingElem.value) {
        totalSettingsElem.classList.add("warning");
    }

}

function updateButton() {
    var warningLevelSettingValue = warningLevelSettingElem.value;
    var criticalLevelSettingValue = criticalLevelSettingElem.value;

    if (SettingsBillAddBtnElem) {
        SettingsBillAddBtnElem.disabled = false;
        totalSettingsElem.classList.remove("danger");
        totalSettingsElem.classList.remove("warning");


        if (totalCostSettings >= criticalLevelSettingValue) {
            totalSettingsElem.classList.add("danger");
        }
        else if (totalCostSettings >= warningLevelSettingValue) {
            totalSettingsElem.classList.add("warning");
        }
    }

}
//add an event listener for when the 'Update settings' button is pressed
SettingsBillAddBtnElem.addEventListener('click', settingsButton);
updateSettings.addEventListener('click', updateButton);