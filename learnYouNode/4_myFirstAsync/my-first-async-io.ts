const fs = require('fs')

const countLinesAsync = () => {
    const pathFile = process.argv[2]
    const readFileAsync = fs.readFile(pathFile, 'utf8')
    const numberLines = ''
    return numberLines
}

const resultCountAsync = countLinesAsync()
console.log(resultCountAsync)