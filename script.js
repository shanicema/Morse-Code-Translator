
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
        inputHeader.innerText = 'Morse Code Input';
        outputHeader.innerText = 'English Text Output';
    } 
    else { 
        inputHeader.innerText = 'English Text Input';
        outputHeader.innerText = 'Morse Code Output';
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const fnToCall = (isMorseCode ? convertToEnglish : convertToMorse);
        output.value = fnToCall(input.value);
    }, updateTime)
}



