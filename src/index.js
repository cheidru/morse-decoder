const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    // write your solution here
    let result = "";
    let exprString = String(expr);
    let morseSubstr = "";
    for (let i = 0; i < exprString.length; i += 10) {
        // result = result + MORSE_TABLE[expr.substr(i, i+10)];
        morseSubstr = exprString.substr(i, i+10);
        // result = result + `${morseSubstr == '**********' ? ' ' : MORSE_TABLE[turnToMorseCode(morseSubstr)]}`;
        result = result + turnToMorseCode(morseSubstr);
    }

    return result;
}

function turnToMorseCode(str) {
    let digs = str.split('');
    let i = 0;
    let morse = "";
    while (digs[i] == 0) i++;
    for (; i < str.length; i += 2){
        morse = digs[i] + digs[i+1] == '10' ? morse + '.' : morse + '-';
    }
    return morse;
}

module.exports = {
    decode
}