

function addMoneyFormHandle(event) {
    event.preventDefault();
    const accoutNumber = 124567895678;
    const pin = 1234;

    const addmoneyAccountNumber = document.getElementById('accountNumberForAddmoney').value;
    const addMoneyPin = document.getElementById('addMoneypin').value;


    const convertedAccount = parseInt(addmoneyAccountNumber);
    const ConnvartedPin = parseInt(addMoneyPin)


    if (addmoneyAccountNumber.length < 11) {
        alert("Account Number At Least 11 Digit")
    }
    else {
        if (ConnvartedPin && ConnvartedPin === pin) {
            const tk = parseInt(document.getElementById('ammount').value);
            let previoustk = document.getElementById('totalAmmount').innerText;
            let array = previoustk.split('')
            array.shift();
            let Finalconversiontk = parseInt(array.join(""));


            if (Finalconversiontk < 0) {
                alert("Are Your Sure Your Amount Have to negative")
            }
            else {



                const sum = parseInt(Finalconversiontk + tk);
                document.getElementById('totalAmmount').innerHTML = `${sum}`;

                console.log(sum)


            }

        }
        else {
            alert("Your Pin incorrect")
        }
    }
    console.log(typeof addMoneyPin, typeof addmoneyAccountNumber)

}

document.getElementById('widthraw-money-btn-id').addEventListener('click', function (event) {
    event.preventDefault();

    const account = parseInt(document.getElementById('accountNumberForwithdraw').value);
    const pin = parseInt(document.getElementById('withdrawMoneypin').value);

    if (account === 124567895678) {

        if (pin === 1234) {

            let privioustk = document.getElementById('totalAmmount').innerText;

            let array = privioustk.split('')
            array.shift();
            let Finalconversiontk = parseInt(array.join(""));
            let tk = parseInt(document.getElementById('withdrawammount').value);

            if (tk > Finalconversiontk) {
                alert(`${tk} tk will be small form your balance`)
            } else {
                const final = parseInt(Finalconversiontk - tk);
                document.getElementById('totalAmmount').innerHTML = `${final}`;

                console.log(typeof Finalconversiontk, typeof tk, array, final)
            }
        }
        else {
            alert("Your Pin is incorrect!")
        }
    }
    else {
        alert("your account number is incorrect!")
    }
})