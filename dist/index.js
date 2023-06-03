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
function getRandomElement(list) {
    const randIx = Math.floor(Math.random() * list.length);
    return list[randIx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([14, 24]));
// Pdwójne typy generyczne 
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ object1: "dog" }, { object2: ["Lablador", "Russell"] });
console.log(comboObj);
// 2 przykład
function marksSubject(one, two) {
    return Object.assign(Object.assign({}, one), two);
}
const maths = marksSubject({ one: 2 }, { two: [4, 4] });
const polish = marksSubject({ one: 1 }, { two: 6 });
console.log(maths);
console.log(polish);
function lengthPeople(people) {
    return people.length;
}
console.log(lengthPeople('Tomek'));
//  type generics - default value
function emptyArray() {
    return [];
}
const string = emptyArray();
string.push('Testowy string');
const defaultString = emptyArray();
console.log(string);
class PlayList {
    constructor() {
        this.item = [];
    }
    addItem(el) {
        this.item.push(el);
    }
}
const songFirst = new PlayList();
songFirst.addItem({ title: 'Nowa piosenka', artist: 'Nowy artysta' });
console.log(songFirst);
const videoFirst = new PlayList();
videoFirst.addItem({ title: 'Nowe Video', creator: 'Nowy twórca' });
console.log(videoFirst);
