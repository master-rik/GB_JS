/* 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

"use strict";

const customerBasket = {

	basketItems: [
		['gold', 100, 100],
		['wood', 50, 200],
		['stone', 30, 500],
		['food', 70, 400],
	],

	countBasketCost() {
		let sum = 0;
		for (let i = 0; i < this.basketItems.length; i++) {
			sum = sum + this.basketItems[i][1] * this.basketItems[i][2];
		}
		return sum;
	},

};

for (let i = 0; i < customerBasket.basketItems.length; i++) {
	const line = document.createElement('p');
	line.innerText = '' + customerBasket.basketItems[i][0] + ': ' + customerBasket.basketItems[i][1] + 'pc.';
	console.log(line);
	document.querySelector('.cart').appendChild(line);
};

const total = document.createElement('p');
if (customerBasket.countBasketCost() > 0) {
	total.innerText = 'Total cost of your basket is ' + customerBasket.countBasketCost() + '$';
} else { total.innerText = 'Your cart is empty...' }

document.querySelector('.cart').appendChild(document.createElement('hr'));
document.querySelector('.cart').appendChild(total);