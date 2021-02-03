/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
	products: [
		{ num: 1, title: 'gold', price: 100, count: 100 },
		{ num: 2, title: 'wood', price: 50, count: 200 },
		{ num: 3, title: 'stone', price: 30, count: 500 },
		{ num: 4, title: 'food', price: 70, count: 400 },
	],


	countBasketPrice() {
		return this.products.reduce((totalPrice, cartItem) =>
			totalPrice += cartItem.price * cartItem.count, 0);
	},

	countProductPositions() {
		return this.products.length;
	},

	countListOfProducts() {
		const list = []
		this.products.forEach((item) => {
			list.push(item.title)
		})
		return list
	}
}

console.log(basket.countBasketPrice())
console.log(basket.countProductPositions())
console.log(basket.countListOfProducts())