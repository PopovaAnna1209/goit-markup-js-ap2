// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала 
// в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// Объявлена функция makeStringFromArray(array, delimiter)
// Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
// Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
