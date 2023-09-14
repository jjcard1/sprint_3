"use strict";
const startCLI = () => {
    const arrayNums = process.argv.slice(2);
    const newArray = [];
    arrayNums.forEach((num) => newArray.push(parseInt(num)));
    const sum = newArray.reduce((a, b) => a + b);
    return sum;
};
const result = startCLI();
console.log(result);
