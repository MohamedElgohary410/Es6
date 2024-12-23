// var a = 5, b = 8
// var arr = [a, b];
// [b, a] = arr;
// console.log(`b : ${b}  a : ${a}`);


// let arr = [5, 40, 25, 12, 90, 55]
// let result = _ => Math.max(...arr) + " ====== " + Math.min(...arr);
// console.log(result());

var fruits = ["apple", "strawberry", "banana", "orange", "mango"]

var every = fruits.every(element => { isNaN(element) });

let some = fruits.some((item) => item.startsWith("a"));

let fil = fruits.filter(item => {
    return item.startsWith('a') || item.startsWith('s')
})

let newArr = fruits.map(item => `I like fruit ${item}`)

console.log(every);
console.log(some);
console.log(fil);
console.log(newArr);
newArr.forEach(item => console.log(item))