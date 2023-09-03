console.log('my'+'cat');
console.log('1'+2);
console.log(`String literal:



''1+2=${1+2}
`);
console.log('elice\'s \n book');

//연산
//+-/*%**

//전위 연산자
let counter=2;
const preIncrement=++counter;
console.log(preIncrement);
//후위 연산자
const postIncrement=counter++;
console.log(`post:${postIncrement} counter=${counter}`);//3,4

//Assignment operators
let x=3;
let y=6;
x+=y;//x=x+y
x*=y;//x=x*y

//comparison operators (비교연산자)
//>,<,<=,>=,==
console.log(4==7);

//logical (논리)
//||(or)
//or은 true가 나온 시점부터 뒤에는 실행하지 않음 -->무조건 true이기때문에
//or은 간단한 것을 앞으로 배치하고 함수 기능은 뒷쪽에 하는 것이 좋다
const value1=true;
console.log(`or: ${value1||4==6||check()}`); 

function check(){
    return true;
}
//and (&&) or과 같음


//equlity
const stringfive='5';
const numberfive=5;
console.log('equlity',stringfive==numberfive);//true
//===strict equlity,no type conversion
console.log('strict equlity',stringfive===numberfive);

//object equlity by reference
const elice1={name:'elice'};
const elice2={name:'elice'};


//참조되는 곳이 다르다 ex elice1이 참조하는 곳은 a1이라 하면 elice2는 참조하는곳이 a2이므로
//참조비교 헀을 때 false
console.log(elice1==elice2);
console.log(elice2===elice1);
const elice3=elice1;//elice3는 elice1와 같은 주소를 참조
console.log(elice3);
console.log('elice1과3:',elice1==elice3);

//if

person='par'
if(person==='bj'){
    console.log('hello bj');
}else if(person==='park'){
    console.log('heloo park');
}else{
    console.log('who are you?');
}
//codition? value1:value2
console.log(person==='park'?'hello':'fuck');

//swich

browser='IE';
switch (browser){
    case 'IE':
        console.log('internet explor');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('hi chrome');
        break;
    default:
        console.log('who are you');
        break;
}

//while

// let i=1;d
// while(i<10){
//     console.log(i);
//     i++
// }
//do while 일단 한번은 실행후 조건에따라 반복 실행
// let j=1;
// do{
//     console.log(j);
//     j++
// }while(j<10);//조건식 false일때만 종료

//for 
// for(let k=1;k<10;k++){
//     console.log(k)
// }

//continue

for(let i=0;i<11;i++){
    if(i%2==1){
        continue;
    }
    console.log(i);

}

//break
for(let i=0;i<11;i++){
    if(i===8){
        break;
    }
    console.log(i);
}