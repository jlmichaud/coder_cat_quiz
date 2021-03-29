const username = document.getElementById('name');
const email = document.getElementById('email');
const lives = document.getElementById('number');
const submit = document.getElementById('submit');
const quiz = document.getElementById('survey-form');
const cat = document.getElementById('cat');
const reset = document.getElementById('reset');
const images = document.querySelectorAll('.image');
const textInputs = document.querySelectorAll('input[type="text"]');
const resetMessages = document.querySelectorAll('.reset-message');
let submitForm = true;

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
  }
});

// CHECK INPUTS
function checkInputs(e){
    e.preventDefault();
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const livesValue = lives.value.trim();
    if(nameValue === ''){
        setErrorFor(username, '*Please enter a name');
    } else {
        setSuccess(username);
    }
    if(emailValue === ''){
        setErrorFor(email, '*Please enter an email address');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, '*Please enter a valid email address')
    } else {
        setSuccess(email);
    }
    if(/\D|0|[1-9]{2,}/.test(livesValue)){
        setErrorFor(number, '*Please enter a number between 1 & 9');
    } else {
        setSuccess(number);
    }
    if(submitForm === true){
        whichCat(e);
    }
}

function setErrorFor(input, message){
    input.classList.add('error-highlight');
    const groupContainer = input.parentElement;
    const error = groupContainer.querySelector('.error-message');
    error.innerText = message;
    error.classList.remove('hidden');
    // how do I scroll to the topmost error item?
    groupContainer.scrollIntoView({
        behavior: 'smooth'
    })
    submitForm = false;
}

function setSuccess(input){
    const groupContainer = input.parentElement;
    groupContainer.classList.add = 'success';
    const error = groupContainer.querySelector('.error-message');
    error.classList.add('hidden');
}

function isEmail(email){
    return /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(email);
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
    // why is this only targetting the first input?
    for(let message of resetMessages){
        message.classList.add('hidden');
    }
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
                if(languages.length > 3){
                    pro.classList.remove('display-none');
                    scrollToImage()
                } else {
                    getHelp.classList.remove('display-none');
                    scrollToImage()
                }
            // else if 'intense'
            } else {
                if(languages.length > 3){
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
                if(languages.length > 3){
                    pro.classList.remove('display-none');
                    scrollToImage()
                } else {
                    aimless.classList.remove('display-none');
                    scrollToImage()
                }
            // else if 'intense'
            } else {
                if(languages.length > 3){
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
