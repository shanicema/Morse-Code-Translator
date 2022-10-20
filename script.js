
import {convertToMorse, convertToEnglish} from './functions.js';
import {morseCodeRegex, updateTime} from './constants.js';


const input = document.getElementById("englishInput");
const translateButton = document.getElementById("translateButton");
const output = document.getElementById("morseOutput");
const inputHeader = document.querySelector('.input__header');
const outputHeader = document.querySelector('.output__header');

const backButton = document.getElementById("backButton");
backButton.addEventListener('click', () => {
    window.location.reload()
})

let timeout;
input.addEventListener('keyup', update);

const reverseButton = document.getElementById('reverseButton');

reverseButton.addEventListener('click', () => {
    let tmp = input.value;
    input.value = output.value;
    output.value = tmp;
    update();

    // input.classList.toggle();
    
});

function update () {
    const isMorseCode = morseCodeRegex.test(input.value);

    if (isMorseCode || input.value.length == 0) {
        outputHeader.innerText = 'English Text Output';
        inputHeader.innerText = 'Morse Code Input';
    } 
    else { 
        outputHeader.innerText = 'Morse Code Output';
        inputHeader.innerText = 'English Text Input';
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        output.value = (isMorseCode ? convertToEnglish : convertToMorse)(input.value);
    }, updateTime)
}



