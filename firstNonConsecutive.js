// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
exports.firstNonConsecutive = (arr) =>
  Number.isInteger(arr.find((val, index) => val !== index + arr[0]))
    ? arr.find((val, index) => val !== index + arr[0])
    : null;
console.log(this.firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// Условие:
// 1. Минимум 2 элемента;
// 2. Все элементы - числа (целые);
// 3. Элементы могут быть отрицательными, положительными, или 0;
// 4. Каждый элемент уникален;
// 5. Элементы расположены по возрастанию;

// Серия тестов на non consecutive
// 1. все положительные:
// - 2 элемента;
// - второй выпадает;
// - рандомный, но не крайний выпадает;
// - последний выпадает;
// 2. все отрицательные:
// - 2 элемента;
// - второй выпадает;
// - рандомный, но не крайний выпадает;
// - последний выпадает;
// 3. последовательность проходит через 0:
// - 2 элемента;
// - заканчивается 0, 0 - выпадающий элемент;
// - начинается с 0, второй элемент - выпадающий;
// - проходит через 0, выпадающий элемент не следует сразу за 0;
// 4. все элементы последовательные:
// - все отрицательные;
// - последовательность проходит через 0;
// - все положительные;
