let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
const notNumberMin = minValue || 0;
minValue = notNumberMin;
const notNumberMax = maxValue || 100;
maxValue = notNumberMax;
const minNumber = (minValue < -999 ? -999 : minValue);
minValue = minNumber;
const maxNumber = (maxValue > 999 ? 999 : maxValue);
maxValue = maxNumber;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
const questionRandom = Math.round(Math.random() * 3);
answerField.innerText = (questionRandom === 1) ? `Вы загадали число ${answerNumber }?`:
(questionRandom === 2) ? `Ты загадал ${answerNumber}?`:
(questionRandom === 3)? `Наверное это ${answerNumber}?`:
`Возможно это ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
   location.reload()
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}`:
                (phraseRandom === 3) ? `Кажется, что-то пошло не так...\n\u{1F642}`:
                `Мне надоело играть\n\u{1F972}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
            
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}`:
                (phraseRandom === 3) ? `Кажется, что-то пошло не так...\n\u{1F642}`:
                `Мне надоело играть\n\u{1F972}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 0;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Я всегда угадываю!\n\u{1F914}` :
                (phraseRandom === 2) ? `Так и знал!\n\u{1F92F}`:
                (phraseRandom === 3) ? `Было легко!\n\u{1F642}`:
                `Компьютеры захватят мир!\n\u{1F631}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

