///let a = Math.floor(Math.random() * 100); - исходное задание, необходимо переделать условие в is else
///(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);  
let a = Math.floor(Math.random() * 100);
let result;

// Вычисляем первое условие (first)
let first;
if (a > 10) {
    first = a;
} else {
    first = a * 2;
}

// Проверяем first > 5
if (first > 5) {
    result = 2 * a + 1;
} else {
    // Вычисляем второе условие
    let second;
    if (a < 3) {
        second = 1;
    } else {
        second = 2 * (a - 2);
    }
    // Проверяем что второе условие > 4
    if (second > 4) {
        result = 5;
    } else {
        // чётность a, 3-е условие
        if (a % 2 === 0) {
            result = 6;
        } else {
            result = 7;
        }
    }
}

console.log('Результат для a =', a, ':', result);