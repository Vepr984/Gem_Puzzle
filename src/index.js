import 'reseter.css/src/scss/reseter.scss';
import './index.scss';


const body = document.querySelector('body');

// create new array with 16 numbers ordered randomly
const numbers = Array.from({ length: 16 }, (v, k) => k + 1).sort(() => Math.random() - 0.5);
// create div element for each number

const fieldElement = document.createElement('div');
fieldElement.classList.add('field');

const cellsElements = numbers.map(number => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    if (number === 16) {
        const emptyItemElement = document.createElement('div');
        emptyItemElement.classList.add('item', 'empty');
        emptyItemElement.dataset.number = number;
        cellElement.appendChild(emptyItemElement);
    } else {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.textContent = number;
        itemElement.dataset.number = number;
        cellElement.appendChild(itemElement);
        itemElement.addEventListener('click', () => {
            const emptyItem = fieldElement.querySelector('.empty');
            const emptyItemNumber = emptyItem.dataset.number;
            const itemNumber = itemElement.dataset.number;
            if (Math.abs(emptyItemNumber - itemNumber) === 16 ) {
                emptyItem.textContent = itemNumber;
                emptyItem.dataset.number = itemNumber;
                itemElement.textContent = '';
                itemElement.dataset.number = '';
            }
        })
    }
    return cellElement;
});

// when you click on a tile next to an empty cell, the tile moves to the empty cell



fieldElement.append(...cellsElements);
body.append(fieldElement);




// const cellsElements = numbers.map(number => {
//     const cellElement = document.createElement('div');
//     cellElement.classList.add('cell');
//     if (number === 16) {
//         const emptyItemElement = document.createElement('div');
//         emptyItemElement.classList.add('item', 'empty');
//         emptyItemElement.dataset.number = number;
//         cellElement.appendChild(emptyItemElement);
//     } else {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('item');
//         itemElement.textContent = number;
//         itemElement.dataset.number = number;
//         cellElement.appendChild(itemElement);
//         itemElement.addEventListener('click', () => {
//             const emptyItem = fieldElement.querySelector('.empty');
//             const emptyItemNumber = emptyItem.dataset.number;
//             const itemNumber = itemElement.dataset.number;
//             if (Math.abs(emptyItemNumber - itemNumber) === 16 || Math.abs(emptyItemNumber - itemNumber) === 4) {
//                 emptyItem.textContent = itemNumber;
//                 emptyItem.dataset.number = itemNumber;
//                 itemElement.textContent = '';
//                 itemElement.dataset.number = '';
//             }
//         })
//     }
//     return cellElement;
// });
