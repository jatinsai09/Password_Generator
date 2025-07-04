// RANDOM PASSWORD GENERATOR

let lengthSlider = document.getElementById("lengthSlider");
let sliderValue = document.getElementById("sliderValue");

sliderValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
    sliderValue.textContent = lengthSlider.value;
})

let checkboxes = document.querySelectorAll('.checkbox');

Array.from(checkboxes).forEach(Element => 
    Element.addEventListener('click', (e) => {
        if(e.target.innerText == 'radio_button_unchecked'){
            e.target.innerText = 'task_alt';
            e.target.nextElementSibling.nextElementSibling.checked = true;
        }
        else{
            e.target.innerText = 'radio_button_unchecked';
            e.target.nextElementSibling.nextElementSibling.checked = false;
        }
    })
)

let includeLabels = document.querySelectorAll('.includeLabel');

Array.from(includeLabels).forEach(Element => 
    Element.addEventListener('click', (e) => {
        if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
            e.target.previousElementSibling.innerText = 'task_alt';
        }
        else{

            e.target.previousElementSibling.innerText = 
            'radio_button_unchecked';
        }
    })
)

let generateBtn = document.getElementById('generateBtn');

let password_display = document.getElementById('password');

generateBtn.addEventListener('click', function(){
    let length = lengthSlider.value;

    let includeUppercase = document.getElementById('uppercase').checked;
    let includeLowercase = document.getElementById('lowercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSymbols = document.getElementById('symbols').checked;

    let password = generatePassword(length, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);
    password_display.value = password;                                


});


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length < 1){
         alert(`Password length must be at least 1`);
         return '';
    }
    if(allowedChars.length === 0){
        alert(`At least one set of character need to be selected`);
        return '';
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

let copyIcon = document.getElementById('copyIcon');

copyIcon.addEventListener('click', () => {
    if(password_display.value != ''){
        navigator.clipboard.writeText(password_display.value)
        copyIcon.innerText = 'check_circle';

        setTimeout(() => {
            copyIcon.innerText = 'content_copy';
        }, 4000);
    }
});