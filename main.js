const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');

const userInput = process.argv.slice(2);
//const test = translateWord(userInput);
//console.log(test);

const newWord = function(words) {
    return words.map(encodeWord).join(' ');
};

console.log(newWord(userInput));