"use strict"

let total = 0;
let input;


do {
    input = prompt('Введіть, будь ласка, число');
    Number(input)
    if (input !== Number(input) && input !== null) {
        alert('Ви ввели не число. Спробуйте, будь ласка, ще')
        continue
    };
    total = total + Number(input);
}
while (input != null);
alert(`Загальна сума чисел дорювнює ${total}`)
