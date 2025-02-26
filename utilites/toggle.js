
document.getElementById('add-money-section').style.display = "block";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transection-section").style.display = "none";

function toggleSectionById(id, status) {
    document.getElementById(id).style.display = status;
}

function GetValueById(id) {

    const value = document.getElementById(id).value;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function GetInnerTextById(id) {
    const text = document.getElementById(id).innerText;
    return text;
}

function SetInnerTextById(id,value) {

    document.getElementById(id).innerText = value;
    
}

function CatchElementByID(id){

    const element = document.getElementById(id);
    return element
}

function MakeElement(element){
    let makeElement = document.createElement(element);
    return makeElement;
}