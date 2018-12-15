let {characterScript, nameForScript} = require('../characterScript');
let countBy = require('../CountBy');

function dominantWritingDirection(context){
    let scripts = countBy(context, char =>
    {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : 'none exist'
    }).filter( c => c.name !== 'none exist');

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total === 0) {
        return 'the verified string is empty'
    } else {
        scripts.sort((firstArgument, secondArgument) =>
            { return secondArgument.count - firstArgument.count }
        );
        let nameOfScript = scripts[0].name;
        let direction = nameForScript(nameOfScript).direction;
        console.log(`the main script is ${nameOfScript} the direction is ${direction}`)
    }
}

dominantWritingDirection('abcsjdkcsklvksjdvkls 我猜是中文比较多');
