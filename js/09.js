// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

function getExtremeElements(array) {
   return [array[0], array[array.length - 1]];
 }

 console.log(getExtremeElements([1, 2, 3, 4, 5]));
 console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
 console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));