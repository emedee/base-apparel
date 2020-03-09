let submitButton = document.querySelector('.btn');
let inputField = document.querySelector('#my-email');
let errorIcon = document.querySelector('.error-icon');
let response = document.querySelector('.valid-email');


function ValidateEmail(inputField){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputField.value.match(mailformat)){
        response.innerHTML = 'email added successfully!';
        response.style.color = 'rgb(150, 255, 140)'
        errorIcon.style.display = 'none';
        inputField.style.border = '1px solid hsl(0, 36%, 70%)';
        inputField.value = '';
    }else{
        inputField.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.display = 'block';
        response.innerHTML = 'Please provide a valid email';
        response.style.color = 'hsl(0, 93%, 68%)';
    }
}

submitButton.addEventListener('click', function(){
    ValidateEmail(inputField);
})