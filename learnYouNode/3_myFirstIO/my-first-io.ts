const fs = require('fs')

const countLinesFile = () => {
    const pathFile:string = process.argv[2]
    const contain:string = fs.readFileSync(pathFile, 'utf8')
    const countLines = contain.split('\n').length - 1
    return countLines
}

const lines = countLinesFile()
console.log(lines)