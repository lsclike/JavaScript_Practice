let charaterScript = require('./characterScript');
let countBy = require('./CountBy');

function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
    })
}

