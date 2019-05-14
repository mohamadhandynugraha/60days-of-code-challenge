const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

const a = {
    start: {
        x: 78,
        y: 90
    },
    end: {
        x: 10,
        y: 1010
    }
};

const {end: {
    x: endX,
    y: endY
}} = a;

console.log(`nilai dari endX ${endX} nilai dari endY ${endY}`);

/*
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator
unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements
you want to assign to variables.

Destructuring an array lets us do exactly that:
 */
const [x, y] = [1, 2, 3, 4, 5, 6];
console.log(`nilai x ${x} nilai y ${y}`);

/**
 * The variable a is assigned the first value of the array, and b is assigned the second value of the array.

 We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
 */
const [newIndex,,,oldIndex,,,,,,index] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newIndex, oldIndex, index);