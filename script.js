
// Задание № 1 (Способ №1)
function strCount(str, letter){  
    const arr = str.split('');
    const result = arr.filter(item =>(item == letter));
    return result.length;
  }
  console.log(strCount('hello', 'l'));

// Задание № 1 (Способ №1)

function str_count(string, symbol) {
    return string.split(symbol).length -1
    
  }
  console.log(str_count('hello', 'o'));