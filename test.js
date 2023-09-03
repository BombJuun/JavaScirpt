'use strict'
const emergency=[30, 10, 23, 6, 100];
let answer =[];
let result=[];
    for(let value of emergency){
        answer.push(value);

    }
    answer.sort((a,b)=>b-a);
    for(let i=1;i<emergency.length+1;i++){
        emergency.splice(emergency.indexOf(answer[i-1]),1,i);
        
    }
    console.log(emergency.indexOf(answer[1]));
    console.log(emergency);
    console.log(answer);
    console.log(result);
    