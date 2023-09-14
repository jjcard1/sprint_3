
const http = require('http')
const url = process.argv[2]

http.get(url, (response:any) => {
    response.setEncoding('utf8')
    
    response.on('error', (err:any) => {
        console.error(err)
    });
    
    response.on('data', (data:string) => {
        console.log(data)
    })
})