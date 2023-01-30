// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// Объявлена переменная oldClients
// Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
// Объявлена переменная newClients
// Значение переменной newClients это массив ["Peach", "Houston"]
// Объявлена переменная allClients
// Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Переменной allClients присвоен массив после применения метода concat с правильными аргументами

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

  console.log(allClients);
