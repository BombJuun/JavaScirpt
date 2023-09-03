//function
//naming dosomtiong,command,verb(동사형태로)
//하나의 함수는 하나의 일만 
//function은 object ==변수로 할당 가능

//parameters
//premitive 메모리에 값이 저장되어 있음
//object 메모리에 참조하는 값의 주소가 저장되어 있음

//그냥 함수 선언은 hoist 가능-->이유:javascript 엔진이 함수 선언을 제일위로 올리기 떄문에
// console.log(add(2,3));
// function add(x,y){
// return x+y;

// }
// console.log(add(1,2));

//default parameters
function showMessage(message,from='unkown'){
    console.log(`${message}by ${from}`);

}

//Rest parameters(...==배열)
function printall(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}
printall('hello','myname','park');

//local variable
function printMessage(){

    let message='local';//local variable
    console.log(message);
    function printAnother(){
        let childmessage='child'
        console.log(message);//가능 부모 변수는 가능

    }
    //console.log(childmessage);//error 자식변수를 부모함수에서 사용 불가능
}
printMessage()

//early return,early exit
//bad
function upgradeUser(User){
    if(User.point>10){
        //long upgrade Logic
    }
}
//good
function upgradeUser(User){
    if(User.point<=10){
        return;
        //long upgrade Logic
    }
}

//anonymous function

// const print=function(){
//     console.log('print');
// }
// print();//print가 할당된후 사용가능
// const print_alpha=print;
// print_alpha();


//callback 함수
//parameter에 함수를 넣어 특정 조건에서 특정함수를 부르는 함수


//anonymous function
const printyes=function(){
    console.log('정답');
}

//named function
//디버깅할때 디버깅 스택추적에서 이름을 보이기위해
const printno=function print(){
    console.log('틀림');
}
function randomQuiz(answer,printyes,printno){
    if(answer=='park'){
        printyes();
    }else{
        printno();
    }
}
randomQuiz('park',printyes,printno);

//arrow function
//always anonymous
const simpleprint=function(){
    console.log('simplePrint!');
}

const simpleprint_arrow=()=>console.log('simplePrint!');
const dvide=(a,b)=>a/b;

//IIFE:immediately invoked function Expression 즉시호출

(function hello(){
    console.log('IIFE');
})();

const add=function(a,b){
    return a+b;
}
const subtract=function(a,b){
    return a-b;
}
const divde=(a,b)=>a/b;

const multiply=(a,b)=>a*b;

const remainder=(a,b)=>a%b;

function calculate(command,a,b){
    let value=0;
    switch(command){
        case '+':
            value=add(a,b);
            return value;
            
            
        case '-':
            value=subtract(a,b);
            return value;
        case '*':
            value=multiply(a,b);
            return value;
        case '/':
            value=divde(a,b);
            return value;
            
        case '%':
            return remainder(a,b);
             
        default:
            console.log('부호 쓰세요');
            break;
    }
}
console.log(calculate('%',2,2));