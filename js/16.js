// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами 
// двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. 
// В противном случае функция должна вернуть новый массив целиком.

// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

function makeArray(firstArray, secondArray, maxLength) {
  const array = firstArray.concat(secondArray);
  
  return array.slice(0, maxLength);
}

  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
  console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));  
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));  