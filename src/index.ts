// Typy generyczne 

const colors: Array<string> = ["red", "green"]
console.log(colors)

// Pobieranie inputa

const inputEl = document.querySelector<HTMLInputElement>("#username")!
inputEl.value = 'HACKED!'

// Pobieranie btn
const btnEl = document.querySelector<HTMLButtonElement>('.btn')!

const clickMe = () => {
    console.log('Kliknięto')
}

btnEl.addEventListener("click", clickMe)

// Funkcja 

function identifyNumber (item: number): number {
    return item
}

console.log(identifyNumber(10))

// Funkcja generyczna
function identyfiyGenercis<Type>(item: Type): Type {
    return item
}

console.log(identyfiyGenercis<string>('Kaczka'))

// interface + generics 

interface Cat {
    nameCat: string
}

function identyfiyCat<Type>(cat: Type): Type {
    return cat
}

console.log(identyfiyCat<Cat>({nameCat: 'Kajtek'}))

// KOLJENA FUNKCJA 

// function getRandomElement (list: <Type>[]): Type {

// }