import '../css/main.less';
import { RandomGenerator } from './random-generator';
import JSImg from '../images/js.jpg';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const jsImgEl = document.querySelector('#jsImg');
const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');
let testObjectRest = {}
testObjectRest= {
    ...testObjectRest,
};

jsImgEl.src = JSImg;
buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);