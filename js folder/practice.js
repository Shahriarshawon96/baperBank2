document.getElementById('dipositButon').addEventListener('click', function () {

    const dipositInput = document.getElementById('diposit-Input');
    const dipositAmount = dipositInput.value;
    const dipositTotal = document.getElementById('amout-total');

    const peviousDipositAmount = dipositTotal.innerText;
    const currentDipositAmount = parseFloat(peviousDipositAmount) + parseFloat(dipositAmount);


    dipositTotal.innerText = currentDipositAmount;

    const totalBalance = document.getElementById('remain-total');
    const priviousBalance = totalBalance.innerText;
    const currentBalance = parseFloat(priviousBalance) + parseFloat(dipositAmount);
    totalBalance.innerText = currentBalance;


    // diposit input emty
    dipositInput.value = '';


});

document.getElementById('withdrawButon').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-Input');
    const withdrawAmount = withdrawInput.value;
    const withdrawText = document.getElementById('withdraw-total');

    const previousWithdraw = withdrawText.innerText;
    const currentWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);

    withdrawText.innerText = currentWithdraw;

    const totalBalance = document.getElementById('remain-total');
    const priviousBalance = totalBalance.innerText;
    const currentBalance = parseFloat(priviousBalance) - parseFloat(withdrawAmount);
    totalBalance.innerText = currentBalance;








    withdrawInput.value = '';



})













