
//Задание №1. Выводим в консоль простые числа от 1 до 100


// let n = 100;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//    for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//    }
//    console.log(i);
// }

//====================================================================================================>
// Задание №2.№3 (пункт- а, пункт- b)

// Корзина в виде массива обьектов
// const cart = [
//    {
//       id: 1,
//       count: 2,
//       name: "Куртка",
//       price: 127,
//       photos: [
//          "1.jpg",
//          "2.jpg",
//       ]
//    },
//    {
//       id: 2,
//       count: 1,
//       name: "Плащ",
//       price: 499,
//       photos: []
//    },
//    {
//       id: 3,
//       count: 1,
//       name: "Кроссовки",
//       price: 26,
//       photos: [
//          "3.jpg"
//       ]
//    },
//    {
//       id: 4,
//       count: 10,
//       name: "Ботинки",
//       price: 78,
//    },
// ];

// // Функция подсчета общей суммы корзины.
// // Написана с использованием методов Reduce и Map. так же использованы стрелочные функции

// function countBasketPrice() {
//    let totalAmount = cart.map(a => sum = a.count * a.price).reduce((accumulator, currentValue) => accumulator + currentValue);
//    return totalAmount;
// }
// console.log('Общая стоимость корзины: ' + countBasketPrice());

// // Сортировка по возрастанию цены. Метод Sort

// let sortingByPrice = cart.sort((a, b) => a.price - b.price);
// console.log(sortingByPrice);

// //Фильтр по наличию фотографий. Метод Filter

// const objectWithPhoto = cart.filter(product => product.photos !== undefined && product.photos.length > 0);
// console.log(objectWithPhoto);


//====================================================================================================>

//Задание №4 Цикл for без тела, с выводом чисел от 0 до 9
//добавил функцию SetTimeout

// let i = 0;
// function numbers(i) {
//    setTimeout(() => {
//       while (i <= 9) {
//          console.log(i);
//          i++;
//       }
//    }, 2000);
// }

// for (; numbers(i);) { };


//====================================================================================================>

//Задание №5 Пирамида

// for (let x = "x"; x.length <= 20; x += "x") {
//    console.log(x);
// }




