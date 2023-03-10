// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// Объявлена функция findNumber(start, end, divisor)
// Вызов findNumber(2, 6, 5) возвращает 5
// Вызов findNumber(8, 17, 3) возвращает 9
// Вызов findNumber(6, 9, 4) возвращает 8
// Вызов findNumber(16, 35, 7) возвращает 21
// Вызов findNumber() со случайным набором чисел возвращает верный результат
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла


function findNumber(start, end, divisor) {
 
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        return i;
    
      }
    }
  }

  console.log(findNumber(2, 6, 5));
  console.log(findNumber(8, 17, 3));
  console.log(findNumber(6, 9, 4));
  console.log(findNumber(16, 35, 7));
