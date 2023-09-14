
const mod = require('./mymodule.ts')

const dir6 = process.argv[2]  
const ext6 = process.argv[3]

mod(dir6, ext6, (err:any, files: string[]) => {
    if (err) {
        return console.error('error:', err)
    }
    
    files.forEach(file => {
        console.log(file)
    })
})