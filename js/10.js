// Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала 
// в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// Объявлена функция splitMessage(message, delimiter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

function splitMessage(message, delimiter) {
   let words;
   words = message.split(delimiter);
   return words;
 }

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));