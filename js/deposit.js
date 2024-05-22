
// step - 1: add event listener to the deposit button  (tn-deposit is the button id name)
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('chek the button');
    // step -2: get the deposit amount from the deposit input field.
    //  For input field use .value to the value inside the input field.
    const depositField = document.getElementById('deposit-field');
    // jodi input fied hole value boshbe;
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);


    // deposit-total semecolon er vitor er ta hocce id name
    // step - 3: get the current deposit total
    // for non-input (element other than input, textarea) use the innertext to get the text;
    const depositTotalElement = document.getElementById('deposit-total');

    // jodi input filed na hoy taile (innerText) hbe. jemon deposit total id ta input field na . tai aita inner text kora hoyece;
    const previousDepositTotalString = depositTotalElement.innerText;
    // string theke parse float number a convert kora hoyece..
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // console.log(depositTotal);

    // step - 4: add number to set the total deposit;
    const currentDeposittotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDeposittotal;


    // step -5: get balance current total;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetotalString);


    //step -6: calculate the current total balance;
    const CurrentTotalBalance = previousBalanceTotal + newDepositAmount;
    // set the blance total
    balanceTotalElement.innerText = CurrentTotalBalance;








    // step- 7: clear the deposit filed;
    depositField.value = '';


})