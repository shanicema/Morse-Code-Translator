
//NOTES from convertToEnglish function - BREAKDOWN

let stringTransform = string.split("   "); // splitting up the words
    console.log(stringTransform);
// ['.... . -.--', '- .... . .-. .'] morse words array

    stringTransform = stringTransform.map(word => word.split(' ')); // splitting up the morse code characters
    console.log(stringTransform);
    // [["....",".","-.--"],["-","....",".",".-.","."]]


    stringTransform = stringTransform.map(word => word.map(el => {
        return morseToEnglish[el] ? morseToEnglish[el] : el;
    })); // converting morse code character to english character
    console.log(stringTransform)
    // [["H","E","Y"],["T","H","E","R","E"]]

    stringTransform = stringTransform.map(word => word.join('')); // joins without a space because they are the letters of the words
    console.log(stringTransform)
    // ['HEY', 'THERE']

    stringTransform = stringTransform.join(' ') // joins with a space (for the words)
    console.log(stringTransform);
    // HEY THERE

    // another way to do a ternary ((cond) ? (a) : (b))
    // (a) || (b)




