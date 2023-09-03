'use strict'

//array

//1.배열선언

const arr1=new Array();
const arr2=[1,2];

//2.Index position
const fruits=['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);
console.clear;
let value;
for(value of fruits){
    console.log(value);
}
//foreach
fruits.forEach(function(value,index,array){
    console.log(value,index);
});
//arrow function
fruits.forEach((fruit,index)=>console.log(fruit,index));


//4. 배열 추가 및 삭제

//add
fruits.push('pinapple');
console.log(fruits);
//delete
fruits.pop();
console.log(fruits);

//unshift 앞에 데이터 넣기
fruits.unshift('pinapple');
console.log(fruits);
//shift 앞에서 데이터 삭제

fruits.shift();
console.log(fruits);


//shift와 un shift은 pop와 push보다 느리다

//지정한 인덱스에 있는 데이터 삭제
//splice
fruits.push('mango','lemon');
console.log(fruits);
fruits.splice(2,1,'딸기'); //splice(시작지점,몇개)
console.log(fruits);

//배열합치기

const fruits2=['파파야','메론'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

//찾기

console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('파파야'));//없을떄 -1
console.log(fruits.includes('파파야'));
console.log(fruits.includes('apple'));
console.log(fruits);
fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

{const value2=1;
console.log(isNaN(value2));
    const result=fruits.join(' ');
console.log(result);
const result2=result.split(' ');
console.log(result2);
console.log(fruits.reverse());
const result3=fruits.slice(2);//배열 인데스2부터 마지막까지 자르기
console.log(result3);
}