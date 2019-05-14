const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    // const squaredIntegers = arr.filter((item) => {
    //     if (Number.isInteger(item) && item > 0){
    //         return item ** 2;
    //     }
    // });
    return arr.map((item) => {
       return Math.pow(item, 2) && item > 0;
    });
};

// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);