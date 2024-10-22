// JavaScript
// console.log('Hello world!');

// フェード
const fade = document.querySelector('.fade');

const fadeKeyframes = {
    opacity: [0, 1],
}

const fadeOptions = {
    duration: 6000,
    easing: 'ease',
    fill: 'forwards',
    iterations: 'Infinity',
}

fade.animate(fadeKeyframes, fadeOptions);

// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
    rotate: ['x 360deg', 'x 0deg'],
    opacity: [0, 1],
}

const spinOptions = {
    duration: 2000,
    easing: 'ease',
    iterations: 'Infinity',
}

spin.animate(spinKeyframes, spinOptions);

// 色の変更
const color = document.querySelector('.color');

const colorKeyframes = {
    backgroundColor: ['#0c80a3', '#70549f', '#ef9098', '#d62940 ', '#f7b300', '#495d36 ', '#3c4140'],
}

const colorOptions = {
    duration: 10000,
    direction: 'alternate',
    iterations: Infinity,
}

color.animate(colorKeyframes, colorOptions);

// 延びる背景
const line = document.querySelector('.line');

const lineKeyframes = {
    width: ['0', '100%'],
    color: ['transparent', '#FFF'],
}

const lineOptions = {
    duration: 3000,
    fill: 'forwards',
}

line.animate(lineKeyframes, lineOptions);

// スライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
};

const slideOptions = {
    duration: 1000,
    fill: 'forwards',
    iterations: Infinity,
};

slide.animate(slideKeyframes, slideOptions);