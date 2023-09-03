//javascript의 object는python dictionary


const obj1={};//object literal
const obj2=new Object();//object constructor

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie={name:'ellie',age:4};
print(ellie);

//뒤늦게 추가 가능
//권장하지 않음(유지보수 힘듦)
ellie.hasJob=true;
console.log(ellie.hasJob);
//삭제 기능
//권장하지 않음(유지보수 힘듦)
delete ellie.hasJob;
console.log(ellie.hasJob);

//2.computed properties
//obj의 key는 string 타입으로 지정해야함
console.log(ellie['name']);
console.log(ellie.name)

ellie['hasjob']=true;
console.log(ellie.hasjob);
function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');

//3.Property value shorthand
// const person1=Person('park',24);
// console.log(person1);

// //constructor Function
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     return this;

// }

//5. in operator
console.log('name' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

//6.for in vs for of

//for(key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}
//for (value of iterable)
const array=[1,2,3,4];
//index값 가져오기
for(value in array){
    console.log(value);
}

//array의 값들 출력
// for(value of array){
//     console.log(value);
// }

//user2는 user(ref1)의 참조주소를 복사함
//user2의 name을 바꾸면 user의 name도 바뀜

const user={name:'ellie',age:'20'};
const user2=user;

// for(value of user2){
//     console.log(value);
// }