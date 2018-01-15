import '../css/main.less';
import { RandomGenerator } from './random-generator';
import webpackLogImg from '../images/webpack-logo.png';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const webpackLogImgEl = document.querySelector('#webpack-log');
const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');
let testObjectRest = {}
testObjectRest= {
    ...testObjectRest,
};

webpackLogImgEl.src = webpackLogImg;
buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);