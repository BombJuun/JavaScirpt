'use strict';
class person{
    //생성자
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    speak(){
        console.log(`${this.name}:my age is ${this.age}`);
    }
}
const elice=new person('bumjun',24);
console.log(elice.name);
console.log(elice.age);
elice.speak();
//getter setter
//getter setter를 설정 후 this.age에 값 가져올때는 getter에서 this.age값을 가져오고
//this.age에 값을 변경할때는 setter를 실행한다
// 그러나 setter에서도 this.age에 값을 변경하는 코드가 있어 다시 setter를 부르는 무한루프에 빠진다
//무한루프에 빠지지 않게 get set에 this.age를 this._age로 변경하여 사용
class User{
    constructor(firstName,lastName,age){
        this.fistName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){
        return this._age;

    }
    set age(value){
        
        this._age=value<=0?0:value;
    }
}
class Experiment{
    publicField=2;
    #privateField=0;

}
const expri=new Experiment();
console.log(expri.publicField);
console.log(expri.privateField);

class Article{
    static publisher='Dream coding'
    constructor(articleNumber){
        this.articleNumber=articleNumber;

    }
    printPublisher(){
        console.log(Article.publisher);
    }
}

const art=new Article(1);
console.log(Article.publisher);

//상속
class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
            }
            draw(){
                console.log(`drawing ${this.color} color of`);
            }
            getArea(){
                return this.width*this.height;
            }
}
class rectangle extends Shape{}//부모 클래스를 상속
class triangle extends Shape{
    draw(){
        super.draw();
        console.log('fuck')
    }
    getArea(){
        return this.width*this.height/2;
    }
}
const rec=new rectangle(20,20,'blue');
rec.draw();
console.log(rec.getArea());
const tri=new triangle(20,20,'red');
console.log(tri.getArea());
tri.draw();
//클래스검사 a instanceof b =>a객체가 b클래스로 만들어졌는가?를 확인한다
console.log(tri instanceof triangle);
console.log(tri instanceof rectangle);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);//자바스크립트에 있는 모든 객체들은  object를 상속한것이다.