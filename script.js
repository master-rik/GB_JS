/* 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Префикс. Сначала поисходит увеличение на единицу, затем возвращается новое значение
d = b++; alert(d);           // 1 Постфикс. Сначала возвращается значение в d, затем происходит увеличение b на единицу
c = (2+ ++a); alert(c);      // 5 Унарный инкремент изменил значение a в первом выражении. Здесь уже складывается 2 и еще раз увеличенное на единицу значение a - c = (2 + 1+2)
d = (2+ b++); alert(d);      // 4 Унарный инкремент изменил значение b во втором выражении. Здесь складывается 2 и значение b до инкремента из-за постфикса c = (2 + 2)
alert(a);                    // 3 a был инкрементирован два раза в выражениях 1 и 3
alert(b);                    // 3 b был инкрементирован два раза в выражениях 2 и 4
Почему код даёт именно такие результаты?
*/

/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
ответ: получиться 5 ===> (х = 1 + (a = 2 * 2))
*/

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */
let a = parseInt(prompt('введите переменную а'));
let b = parseInt(prompt('введите переменную b'));
if (a >= 0 && b >= 0) {
	console.log(a - b);
}
else if (a < 0 && b < 0) {
	console.log(a * b);
}
else {
	console.log(a + b);
}

/* 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
Примечание: переменную а заменил на пременную n */

let n = parseInt(prompt('Введите число от 0 до 15')); // Примечание: переменную а заменил на пременную n

switch (n) {
	case 0:
		console.log(n++);

	case 1:
		console.log(n++);

	case 2:
		console.log(n++);

	case 3:
		console.log(n++);

	case 4:
		console.log(n++);

	case 5:
		console.log(n++);

	case 6:
		console.log(n++);

	case 7:
		console.log(n++);

	case 8:
		console.log(n++);

	case 9:
		console.log(n++);

	case 10:
		console.log(n++);

	case 11:
		console.log(n++);

	case 12:
		console.log(n++);

	case 13:
		console.log(n++);

	case 14:
		console.log(n++);

	case 15:
		console.log(n++);
		break;
}

/* 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function summa(x, y) {
	return x + y;
}

function subtraction(x, y) {
	return x - y;
}

function mult(x, y) {
	return x * y;
}

function division(x, y) {
	if (y !== 0) {
		return x / y;
	} return 'Деление на ноль!';
}


console.log(summa(15, 5));
console.log(subtraction(15, 5));
console.log(mult(15, 5));
console.log(division(15, 5));

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch). */

let arg1 = parseInt(prompt('Введите число от 0 до 100'));
let arg2 = parseInt(prompt('Введите число от 0 до 100'));
let operation = prompt('Введите символ операции ( + , - , * , /)');

function mathOperation(arg1, arg2, operation) {
	let res;
	switch (operation) {
		case '+':
			res = summa(arg1, arg2);
			break;
		case '-':
			res = subtraction(arg1, arg2);
			break;
		case '*':
			res = mult(arg1, arg2);
			break;
		case '/':
			res = division(arg1, arg2);
			break;
	}
	return res;
}

console.log(mathOperation(arg1, arg2, operation));

/*  7. *Сравнить null и 0. Попробуйте объяснить результат.
Ответ:
0 (Zero )- это число, поэтому вы можете делать что-то с ним.
null (Нуль) - единорог. Это не существует, поэтому вы ничего не можете с этим сделать.
*/

/* 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow) {
	if (pow === 0) return 1;

	return val * power(val, pow - 1);
}
console.log(power(5, 3));

/* Рекурсивное вычисление факториала */

function fak(n) {
	if (n == 0) return 1;
	if (n <= -1) return 'неверный диапазон чисел!';

	return (fak(n - 1) * n);
}
n = parseInt(prompt('Введите число'));
console.log(fak(n));

