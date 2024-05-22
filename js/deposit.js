
// step - 1: add event listener to the deposit button  (tn-deposit is the button id name)
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('chek the button');
    // step -2: get the deposit amount from the deposit input field.
    //  For input field use .value to the value inside the input field.
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);

    // deposit-total semecolon er vitor er ta hocce id name
    // step - 3: get the current deposit total
    // for non-input (element other than input, textarea) use the innertext to get the text;
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    // console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;


})