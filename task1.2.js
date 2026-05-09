///let a = Math.floor(Math.random() * 100); - исходное задание, необходимо переделать условие в switch case
///(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);  
let a = Math.floor(Math.random() * 100);
let result;

switch (a) {
    case (a > 10 ? a : a * 2) > 5:
        result = 2 * a + 1;
        break;
    case (a < 3 ? 1 : 2 * (a - 2)) > 4:
        result = 5;
        break;
    default:
        if (a % 2 === 0) {
            result = 6;
        } else {
            result = 7;
        }
}

console.log('Результат для a =', a, ':', result);