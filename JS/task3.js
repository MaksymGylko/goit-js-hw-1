"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userAutorization = prompt("Будь ласка, введіть пароль");
if (userAutorization === null) {
    message = 'Відмінено користувачем!'
    alert(message);
} else if (userAutorization === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!'
    alert(message);
} else {
    message = 'Невірний пароль! Спробуйте, будь паска, ще раз'
    alert(message);
}
