
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