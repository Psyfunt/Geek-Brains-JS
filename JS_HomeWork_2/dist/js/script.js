//Задание №1

// let a = 1, b = 1, c, d;

// c = ++a;
// alert(c); // ответ: 2 - потому что префиксный инкремент
// d = b++;
// alert(d); //ответ: 1 - потому что постфиксный инкремент
// c = 2 + ++a;
// alert(c); //ответ: 5 - потому что а стало ровняться двум после первого вычисления и превратилось в 3 после префиксного инкремента)

// d = 2 + b++;
// alert(d); //ответ: 4 - потому что b стало ровняться 2 после второй операции, а постфиксный инкремент еще не сработал)
// alert(a); //ответ: 3 - потому что а стало ровняться трем после первой и третьей операции)
// alert(b); //ответ: 3 - потому что b увеличилось на еденицу после второй и четвертой операции)


//Задание №2
// var a = 2;
// var x = 1 + (a *= 2);
// alert(x); // output 5  потому что выражение в скобках дает 4


//Задание №3

// let a = parseInt(prompt("Введете первое число:"));
// let b = parseInt(prompt("Введете второе число:"));

// if (a >= 0 && b >= 0) {
//    let result = a - b;
//    alert(result);
// } else if (a < 0 && b < 0) {
//    let result = a * b;
//    alert(result);
// } else {
//    let result = a + b;
//    alert(result);
// }

//Задание №4

// function randomInteger(min, max) {
//    let rand = min + Math.random() * (max + 1 - min);
//    return Math.floor(rand);
// }
// let a = randomInteger(0, 15);

// function outputNumbers(a) {
//    switch (a) {
//       case 0: {
//          console.log(a++);
//       }
//       case 1: {
//          console.log(a++);
//       }
//       case 2: {
//          console.log(a++);
//       }
//       case 3: {
//          console.log(a++);
//       }
//       case 4: {
//          console.log(a++);
//       }
//       case 5: {
//          console.log(a++);
//       }
//       case 6: {
//          console.log(a++);
//       }
//       case 7: {
//          console.log(a++);
//       }
//       case 8: {
//          console.log(a++);
//       }
//       case 9: {
//          console.log(a++);
//       }
//       case 10: {
//          console.log(a++);
//       }
//       case 11: {
//          console.log(a++);
//       }
//       case 12: {
//          console.log(a++);
//       }
//       case 13: {
//          console.log(a++);
//       }
//       case 14: {
//          console.log(a++);
//       }
//       case 15: {
//          console.log(a++);
//          break;
//       }

//    }
// }
// outputNumbers(a);

//Задание №5

// function operationPlus(a, b) {
//    let result = a + b;
//    return result;
// }
// function operationMinus(a, b) {
//    let result = a - b;
//    return result;
// }
// function operationMultiplication(a, b) {
//    let result = a * b;
//    return result;
// }
// function operationSegmentation(a, b) {
//    let result = a / b;
//    return result;
// }
// alert("Результат сложения: " + operationPlus(5, 8));
// alert("Результат вычитания: " + operationMinus(10, 5));
// alert("Результат умножения: " + operationMultiplication(10, 10));
// alert("Результат деления: " + operationSegmentation(10, 5));



//Задание №6

// function mathOperation(arg1, arg2, operation) {
//    switch (operation) {
//       case "+": {
//          let result = operationPlus(arg1, arg2);
//          return alert(result);
//       }
//       case "-": {
//          let result = operationMinus(arg1, arg2);
//          return alert(result);
//       }
//       case "*": {
//          let result = operationMultiplication(arg1, arg2);
//          return alert(result);
//       }
//       case "/": {
//          let result = operationSegmentation(arg1, arg2);
//          return alert(result);
//       }
//    }
// }
// mathOperation(10, 10, "+");
// mathOperation(10, 10, "-");
// mathOperation(10, 10, "*");
// mathOperation(10, 10, "/");


//Задание №7*

// alert(null > 0);  //  false
// alert(null === 0); //  false
// alert(null >= 0); //  true

//Сравнения преобразуют null в число, рассматривая его как 0.
//Поэтому выражение null >= 0 истинно, а null > 0 ложно.


//Задание №8*

// function power(val, pow) {
//    return (pow != 1) ? val * power(val, pow - 1) : val;
// }
// alert(power(2, 3)); 


//Игра угадай число:


// alert("Привет! Давай сыграем в игру угадай число))) Я загадаю число от 1 до 1000, а ты попробуешь его угадать!");
// let answer = getRamdomNumber();
// let userAnswer;
// let count = 3;


// askQuestion();

// function getRamdomNumber() {
//    return Math.floor(Math.random() * 1000);
// }

// function askQuestion() {
//    if (count !== 0) {
//       userAnswer = +prompt("Угадайте число: ");
//       tryUserAnswer();
//    } else {
//       alert("Вы проиграли! Попробуйте еще раз!");
//       resetGame();

//    }
// }

// function resetGame() {
//    let wantToPlay = confirm("Желаете попробовать еще раз?");
//    if (wantToPlay == true) {
//       answer = getRamdomNumber();
//       count = 3;
//       askQuestion();
//    } else {
//       alert("Игра окончена!");
//    }
// }

// function tryUserAnswer() {
//    if (userAnswer > answer && count !== 0 && userAnswer !== "" && userAnswer !== "undefined" && userAnswer !== null) {
//       alert(`${userAnswer} больше загаданного числа!`)
//       count--;
//       askQuestion();
//    } else if (userAnswer < answer && count !== 0 && userAnswer !== "" && userAnswer !== "undefined" && userAnswer !== null) {
//       alert(`${userAnswer} меньше загаданного числа!`);
//       count--;
//       askQuestion();
//    } else if (userAnswer == answer) {
//       return alert(`Поздравляю!!! ${userAnswer}- верное число!`);
//    } else if (isNaN(userAnswer) || userAnswer == "undefined" || userAnswer == "" || userAnswer == null) {
//       alert("Необходимо ввести число!");
//       count--;
//       askQuestion();
//    }
// }


