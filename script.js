/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

/* // Вариант №1
let i = 2;
let prime;

while (i < 100) {
	let j = 1;
	while (j < i) {
		if (i % j !== 0 || j == 1) prime = i;
		else { prime = 0; break; }
		j++;
	}
	if (prime !== 0) console.log(prime);
	i++;
}
 */

//вариант №2

//создаем массив из чисел от 0 до 100
/* let arr = [];
let start = 100;
while (start >= 0) {
	arr.push(start--);
}
arr = arr.reverse();
console.log(arr); */

//создаем массив через цикл for
let arr = [];
let res = [];

for (let start = 100; start >= 0; arr.push(start--));
arr = arr.reverse();


for (let i = 1; i < arr.length; ++i) {
	let flag = 1;
	if (i > 2 && i % 2 != 0) {
		for (let j = 3; j * j <= i; j = j + 2) {
			if (i % j == 0) {
				flag = 0;
				break;
			}
		}
	}
	else if (i != 2)
		flag = 0;
	if (flag == 1) res.push(i)
};

//console.log(arr);// массив от 0 до 100
console.log(res);// массив с простыми числами от 0 до 100


/* 
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

const arrProject = [
	['gold', 100, 100],
	['wood', 50, 200],
	['stone', 30, 500],
	['food', 70, 400]
];

/* function countBasketPrice(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i][1] * arr[i][2];
	}
	return sum;
};

console.log(countBasketPrice(arrProject)); */

let basket = arrProject.reduce(function
	(aсс, [t, p, c]) {
	sum = p * c;
	sum = aсс + sum
	//	console.log('p' + p);
	//	console.log('c' + c);
	//	console.log('a' + a);
	return sum;
}, 0);

console.log('Итого: ' + basket);


/* 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

for (let n = 0; n < 10; console.log(n++));



/* 
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
 */
const ROW = 20;
let x = 'x'
for (let i = 0; i < 20; i++) {
	console.log(x);
	x = x + 'x';
}


