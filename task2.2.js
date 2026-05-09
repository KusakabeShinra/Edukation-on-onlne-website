function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
    let result = '';

    switch (a) {
        case a > 10:
            result += 'a is bigger then 10';
            break;
        default:
            result += 'a is less then or equal to 10';
            switch (a) {
                case 5:
                    result += 'an example of a special case';
                    break;
            }
    }

    switch (a) {
        case 15:
            result += 'but a is not 15';
            break;
    }

    switch (a) {
        case a > 5:
            result += 'and a is greather then 5';
            break;
        default:
            result += 'and a is less then or equal to 5';   
    }

    switch (a % 2) {
        case 1:
            result += 'and a is odd';
            break;
        case 0:
            result += 'and a is even';
            break;
    }

    console.log('Итоговая строка:', result);
    return result;
}

manyChecks();