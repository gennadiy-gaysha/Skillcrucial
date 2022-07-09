// https://www.codewars.com/kata/57e1e61ba396b3727c000251
// решил тремя способами, тестами проверил все три варианта решения:
// exports.stringClean = function stringClean(s) {
//   return s.replace(/[0-9]/g, '');
// };
// console.log(this.stringClean('0123456789'));
// --------------------------------------------------------------------
// exports.stringClean = function stringClean(s) {
//   return s
//     .split('')
//     .filter((it) => isNaN(parseInt(it)))
//     .join('');
// };
// console.log(this.stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@'));
// --------------------------------------------------------------------
exports.stringClean = function stringClean(s) {
  const arr = s.split('');
  const result = arr.reduce((acc, rec) => {
    if (isNaN(parseInt(rec))) {
      return [...acc, rec];
    }
    return acc;
  }, []);
  return result.join('');
};
console.log(this.stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@'));
// --------------------------------------------------------------------

// Условие:
// take in a string and clean out all numeric characters, and
// return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact

// Тест 1. Строка содержит числовые символы:
// 1. строка содержит только числовые символы от 0 до 9;
// 2. удаление повторяющихся числовых символов;
// 3. удаление числовых символов в строке с несколькими пробелами;
// 4. удаление числовых символов из строки содержащей другие символы, включая спецсимволы;
// 5. удаление числовых символов когда они находятся в начале и в конце строки;
// 6. строка из одного числового элемента

// Тест 2. Строка не содержит числовые символы
// 1. строка без пробелов
// 2. строка с пробелами в начале и в конце
// 3. строка с пробелами внутри
// 4. строка из одного не числового элемента

// Тест 3. Пустая строка
// 1. пустая строка без пробела
// 2. пустая строка с пробелом
