let sarray = [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}];
    sarray1 = [];

function calcSquare( width, height ) {
return width * height;
}

for ( let i = 0; i < sarray.length; i++ ) {
let s1 = calcSquare( sarray[i].width, sarray[i].height );
  sarray1[i] = [s1];
} // для второй задачи

for ( let i = 0; i < sarray.length - 1; i++ ) {
let s1 = calcSquare( sarray[i].width, sarray[i].height );
let s2 = calcSquare( sarray[i + 1].width, sarray[i + 1 ].height );
  if ( s2 > s1)  {
    let box = sarray[i];
    sarray[i] = sarray[i+1];
    sarray[i+1] = box;
  }
} // для первой задачи

for ( let i = 0; i < sarray.length; i++ ) {
    console.log( 'width:' + sarray[i].width + ' height:' + sarray[i].height);
}

console.log( sarray1 );

/**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и сортирует их по возрастанию площади
 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [{width: 40, height: 2}, {width: 10, height: 10}, {width: 5, height: 30}]
 */


 /**
 Написать функцию, которая принимает на вход массив объектов с полями длина и ширина и выводит массив их площадей

 [{width: 10, height: 10}, {width: 5, height: 30}, {width: 40, height: 2}] -> [100, 150, 80]
 */