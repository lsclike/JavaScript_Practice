let SCRIPTS = require('./script');

function characterScript(char) {
    for ( let script of SCRIPTS) {
        if ( script.ranges.some(([from, to]) => {
            return char >= from && char < to;
        })){
            return script;
        }
    }
}

module.exports = characterScript;


console.log(characterScript(1212));