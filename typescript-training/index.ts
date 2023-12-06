// Typescript тренажер

// установить ts: npm install typescript
// скомпилировать ts: ts path-to-file.js

// некоторые основыне типы в ts
const helloWorld: string = 'привет, это строка';
const myNumber: number = 123;
const myBoolean: boolean = true;

// any отменяет типизацию
let myAnyVariable: any = 'сюда можно записать любой тип данных';

// если мы хотим сделать массив элементов определенного типа
const myNumbersArray: number[] = [1,2,3];

// если переменная принимает несколько типов
const stringOrBoolean: string | boolean = true;

// можно собрать кастомный тип через ключевое слово type
type numberOrStringOrBoolean = string | number | boolean;
const differentData: numberOrStringOrBoolean = false;


// если нужно типизировать функцию
function pickMax (a: number, b: number): string {
    return `Наибольше число: ${Math.max(a, b)}`;
}

//типизация объектов
// если нужно типизировать объект
const myObject: {
    name: string,
    isEmployee: boolean, 
    childern: string[]
} = {
    name: 'Петр', 
    isEmployee: true, 
    childern: ['Маша', 'Саша']
}

// для типизации объекта следует создавать интерфейс
interface Worker {
    name: string,
    isEmployee: boolean, 
    childern: string[]
}

const newGuy: Worker =  {
    name: 'Сергей', 
    isEmployee: true, 
    childern: ['Николай']
}

// тип unknown используется, когда мы не знаем, что за тип, но узнаем потом
const fuf: unknown = 333;

// для бесконечных функций используем тип never
function loop():never {
    while(true) console.log(42);
}


// typescript и классы

class MyClass {
    
    // public - доступ извне
    // protected - доступ из этого класса и его потомков
    // private - доступ только из этого класса
    constructor(private password: string, public name: string, public age: number, protected isClient: boolean) {
        // все свойства из конструктора сразу добавляются в класс, тут не надо дополнительно прописывать через this)
    }

    public showName(): void {
        console.log(this.name);
    }

}

const classInstance = new MyClass('12345', 'John', 45, true); 
classInstance.showName(); // John
console.log(classInstance.password); // будет ошибка, свойство приватное



// Дженерики
// мы обозначаем, с каким типом данных будет работать функция при её вызове

// вместо <T> подставили тип
function showSomething<T>(a: T, b: T, c: boolean): T {
    return c ? a : b;
}

console.log(showSomething<number>(5, 8, true)); // 5 
console.log(showSomething<string>('apple', 'peach', false)); // peach






