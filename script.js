
// Задание № 1 (Способ №1)
function strCount(str, letter) {
    const arr = str.split('');
    const result = arr.filter(item => (item == letter));
    return result.length;
}
console.log(strCount('hello', 'l'));

// Задание № 1 (Способ №1)

function str_count(string, symbol) {
    return string.split(symbol).length - 1

}
console.log(str_count('hello', 'o'));

// Задание № 2 (Способ №1)

function squareSum(numbers) {
    const result = numbers.map(item => item ** 2)
    const totalSum = result.reduce((a, b) => a + b);
    return totalSum
}
console.log(squareSum([1, 2, 2]));

// Задание № 2 (Способ № 2)
function squareSum(numbers) {
    return numbers.map(el => (el ** 2)).reduce((a, b) => a + b, 0);
}
console.log(squareSum([2, 4, 10]));

// Задание № 2 (Способ № 2)

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    } return sum;
}
console.log(squareSum([2, 40, 10]));

// Задание № 3

function nearestSq(n) {
    let result = Math.sqrt(n)
    if (result % 1 == 0) {
        return result ** 2
    } else {
        const result2 = Math.round(result)
        return result2 ** 2
    }
}
console.log(nearestSq(81));

// Задание № 4

function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution('world'));


// Задание № 5 (Способ №1)

function addLength(str) {
    let arr = str.split(" ")
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + " " + arr[i].length);
    }
    return result
}
console.log(addLength("apple ban"));
console.log(addLength("you will win"));

// Задание № 5 (Способ №2)

function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
}
console.log(addLength("apple ban"));
console.log(addLength("you will win"));

// Задание № 6

function mango(quantity, price) {
    const freeMango = Math.floor(quantity / 3)
    return (quantity - freeMango) * price
}
console.log(mango(4, 5));

// Задание № 7 

function litres(time) {
    return Math.floor(time / 2)
}
console.log(litres(6.7));

// Задание № 8

function invert(array) {
    return array.map(item => item === 0 ? 0 : -item)
}
console.log(invert([1, -5, 3]));

// Задание № 9

function powersOfTwo(n){
    let result = []; 
    for (let i = 0; i <= n; i++){ 
        result.push(Math.pow(2,i)); 
    } return result; 
  }
  console.log(powersOfTwo(4))

  // 10 задание 

  function grow(x){ 
    let result = 1; 
    for (let i = 0; i < x.length; i++){ 
       result *= x[i];
    }  return result; 
  }
  
  console.log(grow([1, 2, 3, 4]))

  