"use strict"

const credits = 23500;
const pricePerDroid = 3000;
let message;

const amountOfDroids = prompt('Будь ласка, введіть необхіднку Вам кількість дроїдів,');

if (amountOfDroids === null) {
    message = 'Відмінено користувачем!'
    alert(message);
} else {
    const totalPrice = amountOfDroids * pricePerDroid;

    if (totalPrice > credits) {
        message = 'Недостатньо коштів на рахунку!'
        alert(message);
    } else {
        message = `Ви придбали ${amountOfDroids} дроїдів, на рахунку залишилось ${credits - amountOfDroids * pricePerDroid} кредитів`
        alert(message);
    }
}