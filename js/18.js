// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел 
// от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// Объявлена функция calculateTotal(number)
// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции calculateTotal(7) возвращает 28
// Вызов функции calculateTotal(18) возвращает 171
// Вызов функции calculateTotal(24) возвращает 300
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение

function calculateTotal(number) {
 let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
return total;
 }
  console.log(calculateTotal(1));
  console.log(calculateTotal(3));
  console.log(calculateTotal(7));
  console.log(calculateTotal(18));  
  console.log(calculateTotal(24));   