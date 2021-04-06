const username = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const submit = document.getElementById('submit');
const quiz = document.getElementById('survey-form');
const cat = document.getElementById('cat');
const reset = document.getElementById('reset');
const images = document.querySelectorAll('.image');
const textInputs = document.querySelectorAll('input[type="text"]');
const takeBreak = document.getElementById('take-break');
const radioBtns1 = document.getElementById('radioBtns1');
const radioBtns2 = document.getElementById('radioBtns2');
const radioBtns3 = document.getElementById('radioBtns3');


const napper = document.getElementById('napper');
const cute = document.getElementById('cute');
const aimless = document.getElementById('aimless');
const getHelp = document.getElementById('get-help');
const pro = document.getElementById('pro');
const anxious = document.getElementById('anxious');
const curmudgeon = document.getElementById('curmudgeon');
const witch = document.getElementById('witch');


// SUBMIT
submit.addEventListener('click', checkInputs);
submit.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.key === 13) {
        checkInputs();
        scrollToError();
  }
});

// CHECK INPUTS
function checkInputs(e){
    e.preventDefault();
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    let nameValid;
    let emailValid;
    let numberValid;
    let radio1Valid;
    let radio2Valid;
    let radio3Valid;
    if(nameValue === ''){
        setError(username, '*Please enter a name');
        nameValid = false;
    } else {
        setSuccess(username);
        nameValid = true;
    }
    if(emailValue === ''){
        setError(email, '*Please enter an email address');
    } else if(!isEmail(emailValue)){
        setError(email, '*Please enter a valid email address');
        emailValid = false;
    } else {
        setSuccess(email);
        emailValid = true;
    }
    // this is not picking up non-digits
    if(/\D|0|[1-9]{2,}/.test(numberValue)){
        setError(number, '*Please enter a number between 1 & 9');
        numberValid = false;
    } else {
        setSuccess(number);
        numberValid = true;
    }
    if(checkButtons(radioBtns1) === false){
        setRadioError(radioBtns1, '*Please select an option');
        radio1Valid = false;
    } else {
        setRadioSuccess(radioBtns1);
        radio1Valid = true;
    }
    if(checkButtons(radioBtns2) === false){
        setRadioError(radioBtns2, '*Please select an option');
        radio2Valid = false;
    } else {
        setRadioSuccess(radioBtns2);
        radio2Valid = true;
    }
    if(checkButtons(radioBtns3) === false){
        setRadioError(radioBtns3, '*Please select an option');
        radio3Valid = false;
    } else {
        setRadioSuccess(radioBtns3);
        radio3Valid = true;
    }
    if(nameValid === true 
        && emailValid === true 
        && numberValid === true
        && radio1Valid === true
        && radio2Valid === true
        && radio3Valid === true){
        whichCat(e);
    }
    scrollToError(radio3Valid, radioBtns3);
    scrollToError(radio2Valid, radioBtns2);
    scrollToError(radio1Valid, radioBtns1);
    scrollToError(numberValid, number);
    scrollToError(emailValid, email);
    scrollToError(nameValid, username);
}

function setError(input, message){
    input.classList.add('error-highlight');
    const groupContainer = input.parentElement;
    const error = groupContainer.querySelector('.error-message');
    error.innerText = message;
    error.classList.remove('hidden');
}

// setRadioError()) work UNLESS the form is submitted following a click on the reset button, then I get this error: Uncaught TypeError: groupContainer.classList.add is not a function (???)

function setRadioError(group, message){
    const groupContainer = group.parentElement;
    groupContainer.classList.add('error-highlight');
    const error = groupContainer.querySelector('.error-message');
    error.innerText = message;
    error.classList.remove('hidden');
}

function setSuccess(input){
    const groupContainer = input.parentElement;
    groupContainer.classList.add('success');
    const error = groupContainer.querySelector('.error-message');
    error.classList.add('hidden');
    input.classList.remove('error-highlight');
}

function setRadioSuccess(input){
    const groupContainer = input.parentElement;
    groupContainer.classList.add = 'success';
    const error = groupContainer.querySelector('.error-message');
    error.classList.add('hidden');
    groupContainer.classList.remove('error-highlight');
}

function checkButtons(group){
    const radioButtons = group.querySelectorAll("input[type='radio']");
    for (var i = 0; i < radioButtons.length; i++) {
         if (radioButtons[i].checked) {
            return true;
         }
    }
    return false;
}

function isEmail(email){
    return /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(email);
}

function scrollToError(validInput, input){
    if(!validInput)
    input.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}


// RESET
reset.addEventListener('click', resetForm);
reset.addEventListener('keyup', function(e){
    if (e.key === 13){
        resetForm();
    }
});

function resetForm(e){
    e.preventDefault();
    for(let image of images){
        image.classList.add('display-none');
    }
    quiz.reset();
    reset.classList.add('display-none');
    window.scrollTo({
        top: 0,
        left: 10,
        behavior: 'smooth'
    });
}

// SCROLL DOWN TO IMAGE
function scrollToImage(){
    reset.classList.remove('display-none');
    cat.scrollIntoView({
        behavior: 'smooth'
        // figure out how to scroll a bit past the top of the div
    })
}

// ASSIGN CAT
function whichCat(e){
    e.preventDefault();
    const breakWork = document.querySelector('input[name="break-work"]:checked');
    const intensity = document.querySelector('input[name="intensity"]:checked');
    const recharge = document.querySelector('input[name="recharge"]:checked');
    const languages = document.querySelectorAll('input[type="checkbox"]:checked');

    for(let image of images){
        image.classList.add('display-none');
    }
    if(breakWork.value === 'break') {
        if(recharge.value === 'social'){
            cute.classList.remove('display-none');
            scrollToImage()
        } else {
            napper.classList.remove('display-none');
            scrollToImage()
        }
    // else if 'keep working'
    } else {
        if(recharge.value === 'social'){
            if(intensity.value === 'laid-back'){
                if(languages.length > 5){
                    pro.classList.remove('display-none');
                    scrollToImage()
                } else {
                    getHelp.classList.remove('display-none');
                    scrollToImage()
                }
            // else if 'intense'
            } else {
                if(languages.length > 5){
                    curmudgeon.classList.remove('display-none');
                    scrollToImage()
                } else {
                    witch.classList.remove('display-none');
                    scrollToImage()
                }
            }
        // else if 'time alone'
        } else {
            if(intensity.value === 'laid-back'){
                if(languages.length > 5){
                    pro.classList.remove('display-none');
                    scrollToImage()
                } else {
                    aimless.classList.remove('display-none');
                    scrollToImage()
                }
            // else if 'intense'
            } else {
                if(languages.length > 5){
                    curmudgeon.classList.remove('display-none');
                    scrollToImage()
                } else {
                    anxious.classList.remove('display-none');
                    scrollToImage()
                }
            }
        }   
    }
}
