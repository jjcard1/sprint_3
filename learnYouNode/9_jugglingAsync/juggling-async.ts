const http9 = require('http')
const bl9 = require('bl')

const ar:string[] = []
const urls = process.argv.slice(2)

const printData = (arData:string[]) => {
    for (var i = 0; i < arData.length; i++) {
        console.log(arData[i])
    }
}

const makeRequest = (url:string, index:number) => {
    http9.get(url, (response:any) => {  
        response.pipe(bl9((err:any, data:string) => {  
            if (err) {
                return console.error(err)
            }
            
            ar[index] = data.toString();
            if (ar.length == urls.length) {
                printData(ar);
            }
        }))
    })
}

for (let i = 0; i < urls.length; i++) {
    makeRequest(urls[i], i);
}