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

function getRandomElement<Type> (list: Type[]): Type {
    const randIx = Math.floor(Math.random() * list.length)
    return list[randIx]
}

console.log(getRandomElement<string>(["a", "b", "c"]))
console.log(getRandomElement<number>([14, 24]))

// Pdwójne typy generyczne 
function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({object1: "dog"}, {object2: ["Lablador", "Russell"]})
console.log(comboObj)

// 2 przykład
function marksSubject<T, U>(one: T, two: U) {
    return {
        ...one,
        ...two
    }
}

const maths = marksSubject({one: 2}, {two: [4,4]})
const polish = marksSubject({one: 1}, {two: 6})

console.log(maths)
console.log(polish)



