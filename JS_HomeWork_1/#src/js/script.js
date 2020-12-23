// Домашнее задание №1
// 1 Задание

let tc = prompt("Введите колличество градусов по Цельсию: ");

let tf = (9 / 5) * tc + 32;

let f = tf.toFixed(2)

let cel = document.getElementById("cel");
cel.innerHTML = tc;


let temp = document.getElementById("temp");
temp.innerHTML = f;

alert("темпиратура по фаренгейту: " + f);

//Задание №2

let name = "Василий";

let admin = name;


alert(admin);

//Задание №3

let a = 1000;
let b = "108";

alert(a + b); // Output : 1000108
