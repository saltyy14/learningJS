/**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и сортирует их по возрастанию площади
 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [{width: 40, height: 2}, {width: 10, height: 10}, {width: 5, height: 30}]
 */
 /**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и выводит массив их площадей
 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [100, 150, 80]
 */
let sarray = [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}];

let turnIntoSquares = (array) => array.map((x) => x.width * x.height);
 
let sortBySquare = (array) => array.sort((a,b) => b.width * b.height - a.width * a.height);
     
console.log (turnIntoSquares(sarray));
console.log (sortBySquare(sarray));
