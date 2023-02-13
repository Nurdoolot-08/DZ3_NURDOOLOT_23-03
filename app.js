//классы (виды) операторов
// 1) унарные -> +, -, !
// 2) бинарные -> математическе действия
// 3) тернарные операторы

//false-черный цвет
var playerColor = false
// if (playerColor){
//     console.log('you start');
// }else {
//     console.log('wait your enemy')
// }
//через тернарные
console.log(playerColor ? 'you start': 'wait your enemy')

// 7-8) symbol, bigint
// var number = 90n
// console.log(typeof number);

//truthy and falsy - выражения
// falsy - false, 0 "", '', undefined, null, NaN, -0, 0n

var isReady = '0'
console.log(isReady ? 'True': 'False')

// var ageUser = +prompt('enter your age')
// console.log(ageUser >= 18 ? 'Доступ разрешен': 'Доступ не разрешен')


//erray - Массив
var numbers = [4, 5, 6, 7, 8, 9, 0]
console.log(numbers.sort())

var others = [
    true,
     false,
    {
     name: 'Nurdoolot'
    },
    null, undefined, 'qwerty', 45, 56n
]

//индексация в массивах
console.log(others[5] [3])
console.log(others.length - 1)

//методы массива
var fruits = ['banana', 'orange', 'apple', 6, 7, 8,];
fruits.push('cherry') //добавляет новый элемент в конец

fruits.unshift('strawberry') //добавляет новый элемент в начало
console.log(fruits)
fruits.splice(2, 0, 'drum') //добавление по индексу

var lastFruit = fruits.pop()
console.log(lastFruit)

var joinFruit = fruits.join()
console.log(joinFruit.toUpperCase())

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[2][0])

//циклы while
var fruits2 = ['banana', 'orange', 'apple'];
var fruit = 'ornage'
var i = 0
while (i < 4){
    if (fruits2[i] === fruit) console.log('fruit found on index', i)
    i++ //i = 1, i+= 1
}

//цикл for
var names = ['aidar', 'anna', 'john', 'jack', 'olivia', 'ilya'];
var blackList = ['ilya', 'anna'];
for (var i = 0; i < names.length; i++){
    if (blackList.includes(names[i].toLowerCase())){
        console.warn(`${names[i]}  in blackList`);
        continue;
    }
    console.log(`welcome , dear guest ${names[i]}`)
}

var array = [null, 1, 2, 3, 4, true, false, "test", undefined, "rest", "cost"];

var strings = [];
var numbers1 = [];
var undeclaredVariable = [];
var booleans = [];

array.forEach(
    val => {
        if (typeof val == "string") {
            strings.push(val);
        } else if (typeof val == "boolean") {
            booleans.push(val);
        } else if (typeof val == "number") {
            numbers1.push(val);
        } else if (typeof val == "undefined" || val == null) {
            undeclaredVariable.push(val);
        }
    }
)

console.log("strings: ", strings);
strings.sort()

console.log("numbers: ", numbers1);
numbers1.reverse()

console.log("undeclaredVariable: ", undeclaredVariable);
undeclaredVariable.reverse()

console.log("booleans: ", booleans);
booleans.sort()