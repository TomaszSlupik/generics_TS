"use strict";
// Typy generyczne 
const colors = ["red", "green"];
console.log(colors);
// Pobieranie inputa
const inputEl = document.querySelector("#username");
inputEl.value = 'HACKED!';
// Pobieranie btn
const btnEl = document.querySelector('.btn');
const clickMe = () => {
    console.log('Kliknięto');
};
btnEl.addEventListener("click", clickMe);
// Funkcja 
function identifyNumber(item) {
    return item;
}
console.log(identifyNumber(10));
// Funkcja generyczna
function identyfiyGenercis(item) {
    return item;
}
console.log(identyfiyGenercis('Kaczka'));
function identyfiyCat(cat) {
    return cat;
}
console.log(identyfiyCat({ nameCat: 'Kajtek' }));
// KOLJENA FUNKCJA 
// function getRandomElement (list: <Type>[]): Type {
// }
