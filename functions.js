import {englishToMorse, morseToEnglish} from './constants.js';

export const convertToMorse = (string) => {
    // string = "hey there!"
    
        let stringTransform = string.toUpperCase().split("");
        // console.log(stringTransform);
        // ouput: ['H', 'E', 'Y', ' ', 'T', 'H', 'E', 'R', 'E', '!']
    
        return stringTransform.map(el => {
            return englishToMorse[el] ? englishToMorse[el]: el;
        }).join(" ");
    }
    
    console.log(convertToMorse("hey there!"));
    
export const convertToEnglish = (string) => {

    return string.split("   ") // separate the words
        .map(word => {
        return word.split(" ") // separate the characters
            .map(el => {
            return morseToEnglish[el] || el; // convert to english character
        }).join('') // join the characters together to make words
    }).join(' ') // join the words together to make sentences
    .toLowerCase();
}

console.log(
    convertToEnglish(".... . -.--   - .... . .-. .")
)
    

