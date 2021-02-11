/* 1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
 */
"use strict"

for (let i = 0; i < (productList.length); i++) {

	let product = document.createElement('div');
	product.className = 'product';
	product.innerHTML = '<div class="name">' + productList[i].name + '</div><div class="discription">' + productList[i].discription + '</div><div class="price">Цена: ' + productList[i].price + ' руб.</div><div class="buyButton" id ="' + i + '">КУПИТЬ</div>';

	let products = document.getElementById('products');
	products.appendChild(product);

}

//функция помещения товара в корзину
function putToBasket(x) {

	let buy = document.createElement('div');
	buy.className = 'buy';
	buy.innerHTML = '' + productList[x.target.id].name + ' - ' + productList[x.target.id].price + ' руб.';

	let basket = document.getElementById('basket');
	basket.insertBefore(buy, basket.children[basket.children.length - 1]);

	let sum = +document.getElementById('sum').innerHTML;
	let currentSum = productList[x.target.id].price + sum;
	document.getElementById('sum').innerHTML = currentSum;
}



//Помещение товара в корзину при нажатии кнопки КУПИТЬ
// в переменную buyButton попадает коллекция элементов с классом buyButton (блоки КУПИТЬ)

let buyButton = document.getElementsByClassName('buyButton');

for (let j = 0; j < (buyButton.length); j++) {
	buyButton[j].onclick = putToBasket;
}