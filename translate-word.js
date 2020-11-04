const emojis = require('./emojis.js');


const translateWord = function(word) {
    for (let i = 0; i < emojis.length; i++){
        if(emojis[i].name === word.toLowerCase()) {
            return emojis[i].symbol;
        }
    }
    return word;
};

module.exports = translateWord;


