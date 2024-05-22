
// 1st step: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('click check');
    // step -2: get the email address inside the email input field.
    // always remember to use value to get the text form an  input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //  step- 3: get password 
    // 3,a) set id on the html element 
    // 3.b) get the element 
    // 3.c) get the value from the element 

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    //  
    console.log(email, password);

    // danger : do not verify email password on the client silde.
    // step - 4 : verify email and password
    if (email === 'jahid@gmail.com' && password === '123') {
        console.log('valid user');
        // javscript a aiter modde locaton set kore dile redirect kore tar location  onojaye page a niye jay.
        window.location.href = 'bank.html';
    } else {
        alert('inValid User. please give the right email or password');
    }

})