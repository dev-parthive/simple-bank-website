//  step: 1 add click event hanlder with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    

    // step 2: get the email address inside the email input field 
    // always remember to use .vlue  to get  text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 get password 
    // step 3.a set id on the html element 
    //step 3.b get the  element 
    // step: 3.c get the value form the element
    const passwrodField = document.getElementById('user-password');
    const password = passwrodField.value;
    // Do NoT Verify email  password on the client side 
    // step-4: verify  email and password and check valid user wheter not 
    if(email === 'sontan@bap.com' && password === 'secret'){
       window.location.href = 'bank.html'

    }else{
        alert('invalid user')
    }
})