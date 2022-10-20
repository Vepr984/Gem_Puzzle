import 'reseter.css/src/scss/reseter.scss';
import './index.scss';


const body = document.querySelector('body');

// console.dir(body);
// body.append('Hello World');
// const button = document.createElement('button');
// body.append(button);
// button.append('Click me');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
    const button = document.createElement('button');
    button.append(number);
    button.classList.add('btn');
    body.append(button);

    button.addEventListener('click', () => {
        console.log(number);
    })

    button.addEventListener('mouseenter', () => {
        button.classList.add('btn-hover');
        console.log(number);
    })
});

