import * as fs from 'fs/promises'
import * as ts from 'typescript'


const apiTypes = 'node_modules/discord-api-types/v10.d.ts'
const code = (await fs.readFile(apiTypes)).toString();
const virtualFileName = "api.ts"

const target = ts.ScriptTarget.Latest
const sf = ts.createSourceFile(virtualFileName, code, target);

const prog = ts.createProgram([sf], {});


const tyc = prog.getTypeChecker()


ts.forEachChild(sf, n => {
    console.log(n)
})


