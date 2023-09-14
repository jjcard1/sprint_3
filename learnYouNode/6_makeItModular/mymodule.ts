
const fs6b = require('fs')
const path6b = require('path')


module.exports = function (dir:string, ext:string, cb:Function) {
    ext = `.${ext}`
    fs6b.readdir(dir, (err:any, files:string[]) => {  
        if (err) {
            return cb(err)
        };
    
        const arFilter:string[] = [];
        files.forEach(file => {
            if (path6b.extname(file) === ext) {
                arFilter.push(file)
            }
        })
    
        return cb(null, arFilter)
    })
}