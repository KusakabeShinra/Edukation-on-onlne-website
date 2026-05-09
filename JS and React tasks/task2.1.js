function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
    let result = '';

    if (a > 10) {
        result += 'a is bigger then 10';

    } 
    else {
       result += 'a is less then or equal to 10';
       if (a === 5) {
        result += 'an example of special case';
       } 
    }

    if (a === 15) {
        result += 'but a is not 15';
    }

    if (a > 5) {
        result += 'and a is greater then 5';
    } 
    else {
        result += 'and a is less then or equal to 5';
    }

    if (a % 2 === 1) {
        result += 'and a is odd';
    } 
    else {
        result += 'and a is even';
    }

    console.log('Итоговая строка:', result);
    return result;
}

manyChecks();