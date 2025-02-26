
document.getElementById('addmoney-click').addEventListener('click', function () {
    toggleSectionById('add-money-section', 'block');
    toggleSectionById("cashout-section", "none");
    toggleSectionById("transection-section", "none");
})
document.getElementById('cashout-click').addEventListener('click', function () {
    toggleSectionById('add-money-section', 'none');
    toggleSectionById("cashout-section", "block");
    toggleSectionById("transection-section", "none");
})

function addMoneyFormHandle(event) {
    event.preventDefault();
    const accountNumber = GetValueById('accountNumberForAddmoney');
    const pinNumber = GetValueById('addMoneypin');
    const tk = GetValueById('ammount');
    if (tk < 0) {
        alert("You will be fill positive Value!");
        return;
    }
    if (String(accountNumber).length < 11) {
        alert("YOUR ACCOUNT NUMBER AT LEAST 11 DIGIT")
    } else {
        if (accountNumber === 124567895678 && pinNumber === 1234) {
            let previoustk = GetInnerTextById('totalAmmount');
            let array = previoustk.split('')
            array.shift();
            let Finalconversiontk = parseInt(array.join(""));
            if (Finalconversiontk < 0) {
                alert("Are Your Sure Your Amount Have to negative")
            }
            else {
                const sum = parseInt(Finalconversiontk + tk);
                SetInnerTextById('totalAmmount', sum)

                const parent = CatchElementByID('transection-container');

                let p = MakeElement('p');

                p.innerHTML = `
                    Account: ${accountNumber}     Amount:${tk}   Status: Added Money
                `
                parent.appendChild(p)


            }
        }
    }

}


function CashOutMoneyHandle(event) {
    event.preventDefault();
    const accoutnNUmber = GetValueById('accountNumberForwithdraw');
    const pinNumber = GetValueById('withdrawMoneypin');
    let privioustk = GetInnerTextById('totalAmmount');
    let array = privioustk.split('')
    array.shift();
    let Finalconversiontk = parseInt(array.join(""));
    let tk = GetValueById('withdrawammount');

    if (tk > Finalconversiontk) {
        alert("Your Balance Is Empty")
        return;
    }
    if (String(accoutnNUmber).length < 11) {
        alert("YOUR ACCOUNT NUMBER AT LEAST 11 DIGIT")
    }
    else {
        if (pinNumber === 1234 && accoutnNUmber === 124567895678) {

            const chasoutTk = Finalconversiontk - tk;
            SetInnerTextById('totalAmmount', chasoutTk)
            console.log(chasoutTk)
            const parent = CatchElementByID('transection-container');

            let p = MakeElement('p');

            p.innerHTML = `
                Account: ${accoutnNUmber}     Amount:${chasoutTk}   Status:CashOut
            `
            parent.appendChild(p)
        }
        else {
            alert("Your Account Number or Pin number invalid!")
        }
    }
}




// function addMoneyFormHandle(event) {
//     event.preventDefault();
//     const accoutNumber = 124567895678;
//     const pin = 1234;

//     const addmoneyAccountNumber = document.getElementById('accountNumberForAddmoney').value;
//     const addMoneyPin = document.getElementById('addMoneypin').value;


//     const convertedAccount = parseInt(addmoneyAccountNumber);
//     const ConnvartedPin = parseInt(addMoneyPin)


//     if (addmoneyAccountNumber.length < 11) {
//         alert("Account Number At Least 11 Digit")
//     }
//     else {
//         if (ConnvartedPin && ConnvartedPin === pin && accoutNumber === convertedAccount) {
//             const tk = parseInt(document.getElementById('ammount').value);
//             let previoustk = document.getElementById('totalAmmount').innerText;
//             let array = previoustk.split('')
//             array.shift();
//             let Finalconversiontk = parseInt(array.join(""));


//             if (Finalconversiontk < 0) {
//                 alert("Are Your Sure Your Amount Have to negative")
//             }
//             else {



//                 const sum = parseInt(Finalconversiontk + tk);
//                 document.getElementById('totalAmmount').innerHTML = `${sum}`;

//                 console.log(sum)


//             }

//         }
//         else {
//             alert("Your Pin incorrect or account number is incoorect")
//         }
//     }
//     console.log(typeof addMoneyPin, typeof addmoneyAccountNumber)

// }

// document.getElementById('widthraw-money-btn-id').addEventListener('click', function (event) {
//     event.preventDefault();
//     const form = document.getElementById('withdrawmoneyform');
//     console.log(form)
//     if (form.checkValidity()) {
//         const account = parseInt(document.getElementById('accountNumberForwithdraw').value);
//         const pin = parseInt(document.getElementById('withdrawMoneypin').value);

//         if (account === 124567895678) {
//             if (pin === 1234) {
//                 let privioustk = document.getElementById('totalAmmount').innerText;
//                 let array = privioustk.split('')
//                 array.shift();
//                 let Finalconversiontk = parseInt(array.join(""));
//                 let tk = parseInt(document.getElementById('withdrawammount').value);
//                 if (tk > Finalconversiontk) {
//                     alert(`${tk} tk will be small form your balance`)
//                 } else {
//                     const final = parseInt(Finalconversiontk - tk);
//                     document.getElementById('totalAmmount').innerHTML = `${final}`;

//                     console.log(typeof Finalconversiontk, typeof tk, array, final)
//                 }
//             }
//             else {
//                 alert("Your Pin is incorrect!")
//             }
//         }
//         else {
//             alert("your account number is incorrect!")
//         }
//     }
//     else {
//         alert("form not validation")
//     }

// })