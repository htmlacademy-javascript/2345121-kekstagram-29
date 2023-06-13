//Функция для проверки длины строки.
const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('проверяемая строка', 20);


//Функция для проверки, является ли строка палиндромом.
//случай, когда в строке встречаются пробелы.
const palindrom = value => {
  value = value.replaceAll(' ', '').toLowerCase();
  let firstLetter = -1;
  let secondLetter = value.length;
  const sum = Math.floor((secondLetter / 2) - 1);
  while (firstLetter < sum) {
    firstLetter++;
    secondLetter--;
    const firstHalfOfString = (value.slice(firstLetter, firstLetter + 1));
    const secondHalfOfString = (value.slice(secondLetter, secondLetter + 1));
    const result = (firstHalfOfString === secondHalfOfString);
return result;
}
}
palindrom('Лёша на полке клопа нашёл ');


//Дополнительное задание
const getNumbers = (string) => {
  string = string.toString();
  let result = '';
  let number;
  for (let i = 0; i < string.length; i++) {
    number = parseInt(string[i], 10);
    if (!Number.isNaN(number)) {
      result += number;
    }
  }
  return Number(result) || NaN;
};

getNumbers('ECMAScript 2022');
