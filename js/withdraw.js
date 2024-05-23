/**?
 * 1.add event handler with the withdraw button
 * get the withdraw amount from the withdraw input field
 * also make sure to conbert the input into a number by using parseFloat
 * get Previous withdraw total
 * 
 */

// step - 1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step- 2:get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // also make sure to conbert the input into a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step - 3: get Previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(PreviousWithdrawTotalString);

    // step -4: calculate the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step -5: get the previous balance total;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetotalString);

    // step-6: calculate new balance total and set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // step-7: ckear the input field;
    withdrawField.value = '';


})