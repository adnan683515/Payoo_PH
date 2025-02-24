document.getElementById('login-id').addEventListener('click',function(event){
    event.preventDefault()

    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const converted = parseInt(pin);
    if(accountNumber.length > 11){
        if(converted === 1234){
            window.location.href="main.html"
        }
        else{
            alert("Your Pin is incorrect!")
        }
    }
    else{
        alert("account number have to  at least 11 number!")
    }
})