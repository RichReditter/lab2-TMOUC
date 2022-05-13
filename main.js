// Сколькими способами можно выбрать две книги по разным темам,
// когда на полке находятся 15 книг по информатике, 12 книг по
// математике и 10 книг по химии?

// let amountOfBooks, booksIT, booksMath, booksChemistry;
// [amountOfBooks, booksIT, booksMath, booksChemistry] = [2, 15, 12, 10];
// let firstPair = booksIT * booksChemistry;
// let secondPair = booksIT * booksMath;
// let thirdPair = booksMath * booksChemistry;
// let numberOfWays = firstPair + secondPair + thirdPair;
// console.log(numberOfWays);

// Комитет из 20 членов избирает председателя и секретаря. Сколькими
// способами это можно сделать?

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
// function combinationRepetition(n, m) {
//   return factorial(n + m - 1) / (factorial(m) * factorial(n - 1));
// }

// console.log(combinationRepetition(20, 2));

// Имеются семь различимых шаров, и требуется положить три шара в
// первую коробку, два шара — во вторую и два шара — в третью
// коробку. Сколькими способами можно это сделать?

// function combination(n, k) {
//   return factorial(n) / (factorial(k) * factorial(n - k));
// }
// let firstBox = combination(7, 3);
// let secondBox = combination(7, 2);
// let thirdBox = combination(7, 2);
// numberOfWays = secondBox + firstBox + thirdBox;
// console.log(numberOfWays);

// 2 задание
// По пункту 4: решить рекуррентное соотношение и программно
// реализовать вычисление 5 члена числовой последовательности через
// рекурсию и полученное решение.

const n = 6;
function Recurrence(n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return -8;
  }
  let value = -4 * Recurrence(n - 1) - 4 * Recurrence(n - 2);
  if (value != 0) {
    return value;
  }
}
console.log(Recurrence(n));
// 4 задание
//  Написать программу генерации перестановок (рекурсивный вариант).
// Четные номера – реализуют лексикографический порядок генерации.
// Нечетные номера – реализуют антилексикографический порядок
// генерации.
function make(arr, el) {
  var i, i_m;
  var len = arr.length;
  var res = [];
  for (i = len; i >= 0; i--) {
    res.push([].concat(arr.slice(0, i), [el], arr.slice(i, i_m)));
  }
  return res;
}
function combinations(arr) {
  var prev, curr, el, i;
  var len = arr.length;
  curr = [[arr[0]]];
  for (i = 1; i < len; i++) {
    el = arr[i];
    prev = curr;
    curr = [];
    prev.forEach(function (item) {
      curr = curr.concat(make(item, el));
    });
  }
  return curr;
}

m = [1, 2, 3, 4, 5];
console.log(combinations(m));

// Написать программу генерации k- элементных подмножеств n-
// элементного множества в лексикографическом порядке. Вход: k –
// мощность подмножества, n - мощность множества.
var combinations = (function () {
  var res = [];

  function combinations(arr, k, start, idx, current) {
    if (idx === k) {
      res.push(current.slice());
      return;
    }
    for (var i = start; i < arr.length; i += 1) {
      current[idx] = arr[i];
      combinations(arr, k, i + 1, idx + 1, current);
    }
  }

  return function (arr, k) {
    res = [];
    combinations(arr, k, 0, 0, []);
    var temp = res;
    // Free the extra memory
    res = null;
    return temp;
  };
})();
var result = combinations([1, 2, 3, 4, 5], 3);
console.log(result);

// let lastElements = [0];
// let neededElement;
// const array = [7 ,3 ,4 ,6 ,5 ,2 ,1]
// for( let i = array.length; i > 0; i--){
//     if( array[i] < lastElements.pop()){
//         neededElement = array[i]
//     }
//     else{
//         lastElements.push(array[i])
//     }
// }

// let lessElements = [];
// let newArray = array.slice(array.indexOf(neededElement),array.length)
// let firstElement = newArray.shift();
// for( let i = 0; i < newArray.length; i++){
//     if(firstElement < newArray[i]){
//         lessElements.push(newArray[i])
//     }
// }
// let min;
// if(lessElements.length > 1){
//     min = lessElements.reduce((a, b) => Math.min(a, b))
// }

// console.log(firstElement)
// console.log(min)
// array.forEach( (element,index) =>{
//     if( element == firstElement){
//         element = min
//         console.log(element)
//     }
// })
