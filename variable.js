'use strict'

//2 variable rw(read/write)
//let (es6)

let name='hello';

console.log(name);
const infinity=1/0;
const nagativeinfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity); //infinity
console.log(nagativeinfinity);//-infinity
console.log(nAn);//NaN

//number 범위 -2**53<number<2**53

//string char타입이 없이 string으로만 존재
//const immutable r(read only)
//const 변수 값 변경 불가
//보안,스레드 안전성,실수 방지를 위해서는 사용
//되도록 let으로 사용
const char='c';
const value='f';
console.log('value: ',value,'type:',typeof(value));
const sum='hi '+value;
console.log(sum);
console.log(`value ${value}, type: ${typeof value}`);
//null
let nothing=null;
console.log(`value:${nothing},type:${typeof nothing}`);
//undefined
let x;
console.log(`value: ${x},type:${typeof x}`);
//symbol 고유한 심볼을 만들때 사용 

const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1==symbol2);//false


//true
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1==gSymbol2);
console.log(`value:${symbol1.description},type:${typeof symbol1}`);

//note
//immutable 데이터:premitive types,frozen objects(object.freeze())
//Mutable date types:js에 있는 모든 objects 변경 가능
//Dynamymic 
let text='hello';
console.log(text.charAt(0));
text=1;
console.log(`${text},${typeof text}`);
text='7'+5;
console.log(`${text},${typeof text}`);
text='8'/'2';
console.log(`${text},${typeof text}`);

//object
const elice={name:'elice',age:20};
console.log(elice);
elice.age=21;//name이나 age값은 변경가능하다
const bo={name:'bo',age:10};
//elice=bo; error
//하지만 참조는 변경 불가- const때문
console.log(elice);
