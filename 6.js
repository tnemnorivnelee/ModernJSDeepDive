// 모두 숫자 타입이다.
var integer = 10;    // 정수
var double = 10.12;  // 실수
var negative = -20;  // 음의 정수


var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary === octal); // true
console.log(octal === hex);    // true


// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2);     // 2
console.log(3 / 2);     // 1.5
console.log(0 === -0); // true
Object.is(0, -0); // false


// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);       // Infinity
console.log(10 / -0);      // -Infinity
console.log(1 * 'String'); // NaN

console.log(typeof NaN); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined


console.log(1234123123123123123n === BigInt(1234123123123123123)) // true



// 문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";



var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/

var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/


var first = 'Ung-mo';
var last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.

var first = 'Ung-mo';
var last = 'Lee';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}




// Symbol 타입
// ES6에서 새롭게 추가된 원시 타입
// Symbol은 유일하고 변경 불가능한 값이다.
// Symbol은 주로 객체의 프로퍼티 키로 사용된다.

console.log(Symbol('abc') === Symbol('abc')); // false

var a = Symbol('foo');
var b = Symbol('foo');
console.log(a === b); // false



// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value



var foo;
console.log(typeof foo);  // undefined

foo = 3;
console.log(typeof foo);  // number

foo = 'Hello';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean

foo = null;
console.log(typeof foo);  // object

foo = Symbol(); // 심벌
console.log(typeof foo);  // symbol

foo = {}; // 객체
console.log(typeof foo);  // object

foo = []; // 배열
console.log(typeof foo);  // object

foo = function () {}; // 함수
console.log(typeof foo);  // function
