// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых 
// пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  string = string.split(' ');
  let wordLongest = string[0];
  
  for (const word of string) {
    if (word.length > wordLongest.length) {
      wordLongest = word;
    }
  }
  return wordLongest;
}

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("Google do a roll"));
  console.log(findLongestWord("May the force be with you"));
 
