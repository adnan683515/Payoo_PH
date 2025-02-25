    document.getElementById('add-money-section').style.display = "block"
    document.getElementById('cashout-section').style.display = "none"

document.getElementById('addmoney-click').addEventListener('click', function () {
    document.getElementById('cashout-section').style.display = "none"
    document.getElementById('add-money-section').style.display = "block"

})

document.getElementById('cashout-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = "none"
    document.getElementById('cashout-section').style.display = "block"

})