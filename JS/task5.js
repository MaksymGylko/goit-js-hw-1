"use strict"

let country;
let priceOfDelivery;

const countryName = prompt('Введіть, будь ласка, свою країну');

if (countryName === null) {
    alert('Відмінено користувачем!');
} else {
    switch (countryName.toLowerCase()) {
        case 'китай':
            country = 'Китай'
            priceOfDelivery = 100
            alert(`Доставка в ${country} буде коштувати ${priceOfDelivery} кредитів`);
            break;
        case 'чилі':
            country = 'Чилі'
            priceOfDelivery = 250
            alert(`Доставка в ${country} буде коштувати ${priceOfDelivery} кредитів`);
            break;
        case 'австралія':
            country = 'Австралію'
            priceOfDelivery = 170
            alert(`Доставка в ${country} буде коштувати ${priceOfDelivery} кредитів`);
            break;
        case 'індія':
            country = 'Індію'
            priceOfDelivery = 80
            alert(`Доставка в ${country} буде коштувати ${priceOfDelivery} кредитів`);
            break;
        case 'ямайка':
            country = 'Ямайку'
            priceOfDelivery = 120
            alert(`Доставка в ${country} буде коштувати ${priceOfDelivery} кредитів`);
            break;
        default:
            alert('Нажаль, в Вашій країні доставка недоступна.');
    }
}