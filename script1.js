/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */


'use strict';
let numberInObj = (num) => {
	let object = {},
		numarray = String(num).split('');

	if (num < 999) {
		object.units = Number(numarray[2]);
		object.tens = Number(numarray[1]);
		object.hundreds = Number(numarray[0]);
	} else {
		console.log('Число больше 999');
	}

	return (object);
};

console.log(numberInObj(555));
console.log(numberInObj(5555));