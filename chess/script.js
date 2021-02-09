/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. */

"use strict";

const chessField = {
	rowCount: 8,
	colCount: 8,
	blackCellColor: '#000',
	whiteCellColor: '#fff',
	containerElement: null,
	cellLetters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
	cellSize: '80px',

	initCells() {
		this.containerElement = document.getElementById('field');
		this.containerElement.innerHTML = '';
		let lines = 8;

		for (let row = 0; row < this.rowCount; row++) {

			const trElem = document.createElement('tr');
			this.containerElement.appendChild(trElem);
			const firstCell = document.createElement('td');
			firstCell.innerText = '' + lines;
			trElem.appendChild(firstCell);
			lines--;
			let colorCode = 8;

			for (let col = 0; col < this.colCount; col++) {
				const cell = document.createElement('td');
				cell.style.height = this.cellSize;
				cell.style.width = this.cellSize;
				if (lines % 2 > 0) {
					if (colorCode % 2 > 0) {
						cell.style.backgroundColor = this.blackCellColor;
					}
				}
				else {
					if (colorCode % 2 === 0) {
						cell.style.backgroundColor = this.blackCellColor;
					}
				}
				trElem.appendChild(cell);
				colorCode--;
			}
		}

		const letterLine = document.createElement('tr');
		this.containerElement.appendChild(letterLine);
		for (let col = 0; col < this.cellLetters.length; col++) {
			const cell = document.createElement('td');
			cell.innerText = '' + this.cellLetters[col];
			cell.style.textAlign = 'center';
			letterLine.appendChild(cell);
		}
	},

};

chessField.initCells();
