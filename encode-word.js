const emojis = require('./emojis.js');

const encodeWord = function(word) {
    let str = '';
    for (let a = 0; a < word.length; a++) {
        for (let b = 0; b < emojis.length; b++) {
            if(word[a].toLowerCase() === emojis[b].letter) {
                str += emojis[b].symbol;
            }
        }
    }
    return str;
};


module.exports = encodeWord;