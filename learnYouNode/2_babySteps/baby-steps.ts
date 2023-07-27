const startCLI = () => {
    const arrayNums: string[] = process.argv.slice(2)
    const newArray: number[] = []
    arrayNums.forEach((num:string) => newArray.push(parseInt(num)))
    const sum = newArray.reduce((a:number, b:number) => a + b)
    return sum
}
const result = startCLI()
console.log(result)