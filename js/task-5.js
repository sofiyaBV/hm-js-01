let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введіть число");
  if (!isNaN(input)) {
    numbers.push(Number(input));
    console.log(numbers);
  } else {
    alert("Було введено не число, попробуйте ще раз");
  }
} while (input !== null);
if (numbers.length > 0) {
  for (const iterator of numbers) {
    total += iterator;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
