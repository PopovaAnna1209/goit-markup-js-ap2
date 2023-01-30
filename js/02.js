// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение 
// с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
      
    if (password === ADMIN_PASSWORD) {
        return "Welcome!";
    }
  
    return "Access denied, wrong password!";

  }

  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword("polyhax"));
  console.log(checkPassword("jqueryismyjam"));