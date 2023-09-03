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
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  //find 조건에 맞는 하나의 object찾기
const value4=students.find(function(student){
    return student.score<=90;
    

}); 

console.log(value4); 

const value5=students.filter((student)=>student.enrolled);
console.log(value5);

//모든 학생의 점수 찾기
const value6=students.map((student)=>student.score);
console.log('map',value6);

const value7=students.filter((student)=>student.score<50);
console.log('fillter',value7);


//some 학생 점수가 한명이라도 50점 이하이면 true

const value8=students.some((student)=>student.score<50);
console.log(value8);

//every 모든 학생 점수가 50점이하이면 true
const value8_=students.every((student)=>student.score>50);
console.log(value8_);

const value9=students.reduce((prev,curr)=> prev+curr.score,0);
//curr점수를 pe
console.log(value9/students.length);

const value10=students.map((student)=>student.score).filter((score)=>score>50);
console.log(value10.join(','));

const value11=students.map((student)=>student.score).sort((a,b)=>b-a);
console.log(value11);