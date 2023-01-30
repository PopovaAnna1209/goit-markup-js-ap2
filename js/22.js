// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push

function createArrayOfNumbers(min, max) {
  const numbers = [];
  
  for (let i = min; i <= max; i += 1) {
  numbers.push(i); 
  }
  return numbers;
}

  console.log(createArrayOfNumbers(1, 3));
  console.log(createArrayOfNumbers(14, 17));
  console.log(createArrayOfNumbers(29, 34));
