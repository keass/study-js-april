"use strict";


var stooge = {};
var x = stooge; // x는 스투지를 참조
x.nickname = 'Curly'; // x에 메소드 추가
var nick = stooge.nickname; // 닉은 스투지 메소드 참조
console.log(nick); // 정상 출력



 /*
 var isArray = function(value){
 return typeof value === 'object' &&
 typeof value.length === 'number' &&
 typeof value.splice === 'function' &&
 !(value.propertyIsEnumerable('length'));
 };

 var isNull = function(value){
    return typeof value == 'object' && !value;
};


/*

// 클로저 예제
function outerFunc(arg1, arg2){
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1+arg2)/(innerArg+local));
    }
    return innerFunc;
}
var exam1 = outerFunc(2,4);
exam1(2);

*/


/*
// 실행 컨텍스트 순서
// 실행 컨텍스트 만들고 1. 전역 컨텍스트 먼저~ 2. 함수호출된 ExContext2 3. 그 속에서 함수호출된 ExContext1 먼저~
console.log('첫번째 콘솔로그');

function ExContext1(){
    console.log('두번째 콘솔로그');
}
function ExContext2(){
    ExContext1();
    console.log('세번째 콘솔로그');
}

ExContext2();
*/

/*
// 함수 프로퍼티 prototype  / 객체 숨은 프로퍼티 __prototype__링크
var son = {
    skill:function(){
        console.log('바람의힘~');
    },
    parentskill:function(){
        this.prototype.oldskill();
    }
}

son.prototype = {
    oldskill:function(){
        console.log('벼락이여~');
    }
};

console.log(son.skill());
console.log(son.parentskill());
console.log(son.prototype.oldskill());
*/

/*
//생성자 함수에 call(), apply()

function Person(name, age, gender){ // 생성자 함수
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var foo = {}; // 빈객체

//Person.apply(foo, ['하동수',30,'male']);
Person.call(foo, '하동수',30,'male');

console.dir(foo);
*/



// object 안 this는 object에 바인딩 되고
// function 안 this는 window에 바인딩 된다. ( X function )
// 객체>메소드>함수 안의 this는 기본적으로 window에 바인딩. 그래서 메소드 상단에 that을 써서 바인딩

/*

// 즉시 실행함수는.. 초기화에 많이 활용된다.
(function(name){
    console.log('This is '+name);
})('foo');
*/


// 2015-03-20 금

/*
// 함수는 실제로 똑같은 이름으로 표현식 선언 되는거나 마찬가지다. 기명 함수식일때 함수명(factorial)은 외부에서 호출하면 에러.
// 내부에서 활용할 수는 있다.
var factorialVar = function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
};
console.log(factorialVar(5));
console.log(factorial(5)); // undefined 남
*/




/*
// 객체와 배열은 큰 차이는 없으나, 배열은 push, length등 메소드를 가지는 프로토타입을 보유
var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__); // array[0]
console.dir(emptyObj.__proto__); // object
*/

/*
// foo에 선언되지 않은 메소드 toString이 작동한다. 상위의 프로토타입이 있는것.
var foo = {
    name:'foo',
    age:30
}
foo.toString();
console.dir(foo);
*/


/*
// 값 호출. 복사된다 / 참조 호출. 참조해서 객체의 수치를 바꾼다.
var a = 100;
var objA = { value:100 };

function changeArt(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);

}

changeArt(a, objA); // 200, objA.value = 200 << 객체 안에 프로퍼티를 참조해서 바꿔버린다.

console.log(a); // 100
console.log(objA); // objA.value = 200
*/



/*
// == 동등 연산자. 숫자는 동일하다. 객체의 프로퍼티는 각각 생성되므로 '다른' 것이다.
var a = 100;
var b = 100;

var ojbA = { value:100 };
var ojbB = { value:100 };
var objC = ojbB;

console.log(a == b);
console.log( ojbA == ojbB ); //false
console.log( ojbB == objC );

*/



/*
객체를 =  넣는게 아니라 참고하는것. A의 프로퍼티를 B도 같이 참조한다.

var objA = {
    data:40
};
console.log(objA.data);

var objB = objA;

objB.data = 50;

console.log(objA.data);
console.log(objB.data);
*/




/*
객체를 만들고 프로퍼티를 쭉 확인할때 많이 쓰는 for in

var myprofile = {
    name:'hadongsoo',
    age:30,
    tall:180,
    weight:85
}
var prop;
for (prop in myprofile ){
    console.log(prop, myprofile[prop]);
}
*/




/*
this의 사용처? this는 내 위치를 알려주는 느낌?

function test(){
    this.style.backgroundColor = '#cc0000';
    //console.log('click');
}

var obj = document.querySelector('.test');
var varul = document.querySelector('ul');

obj.addEventListener('click',test);



//varul.onclick = test;
varul.onclick = function(){
};
*/
