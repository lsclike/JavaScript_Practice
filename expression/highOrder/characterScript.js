let SCRIPTS = require('./script');
function characterScript(charaCode) {
    for ( let script of SCRIPTS) {
        if ( script.ranges.some(([from, to]) => {
            return charaCode >= from && charaCode < to;
        })){
            return script;
        }
    }
}

function nameForScript(nameOfTheScript) {
    for ( let script of SCRIPTS) {
        if (script.name === nameOfTheScript){
            return script
        }
    }
    return 'Not found the name for the script'
}

module.exports = {characterScript, nameForScript};
