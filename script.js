
import {convertToMorse, convertToEnglish} from './functions.js';
import {morseCodeRegex, updateTime} from './constants.js';

const input = document.getElementById("englishInput");
const translateButton = document.getElementById("translateButton");
const output = document.getElementById("morseOutput");
const inputHeader = document.querySelector('.input__header');
const outputHeader = document.querySelector('.output__header');


let timeout;
input.addEventListener('keyup', update);

const reverseButton = document.getElementById('reverseButton');

reverseButton.addEventListener('click', () => {
    let tmp = input.value;
    input.value = output.value;
    output.value = tmp;
    update();
});

function update () {
    const isMorseCode = morseCodeRegex.test(input.value);

    if (isMorseCode) {
        outputHeader.innerText = 'English Text Output';
        inputHeader.innerText = 'Morse Code Input';
    } else {
        outputHeader.innerText = 'Morse Code Output';
        inputHeader.innerText = 'English Text Input';
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        output.value = (isMorseCode ? convertToEnglish : convertToMorse)(input.value);
    }, updateTime)
}



