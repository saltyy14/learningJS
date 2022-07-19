/**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и сортирует их по возрастанию площади
 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [{width: 40, height: 2}, {width: 10, height: 10}, {width: 5, height: 30}]
 */
 /**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и выводит массив их площадей
 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [100, 150, 80]
 */
let sarray = [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}];

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    var pivot = ( array[0].height * array[0].width );
    
    var left = []; 
    var right = [];
    
    for (var i = 1; i < array.length; i++) {
        ( array[i].height * array[i].width ) > pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(array[0], quicksort(right));
  }

function turnIntoSquares(array) {
    let sarray1 = [];

    function calcSquare( width, height ) {
        return width * height;
    }
    
    for ( let i = 0; i < array.length; i++ ) {
        let s1 = calcSquare( array[i].width, array[i].height );
        sarray1[i] = [s1];
    }
    return sarray1;
}

function sortBySquare(array) {
   let sarray2 = quicksort(array);

   for ( let i = 0; i < sarray2.length; i++ ) {
        console.log( 'width:' + sarray2[i].width + ' height:' + sarray2[i].height);
    }
    return sarray2;
}

console.log ( turnIntoSquares( sarray ) );
console.log( sortBySquare( sarray ) );
