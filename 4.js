// // 변수는 하나의 값을 저장하기 위한 수단이다.
// var userId = 1;
// var userName = 'Lee';

// // 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
// var user = { id: 1, name: 'Lee' };

// var users = [
//   { id: 1, name: 'Lee' },
//   { id: 2, name: 'Kim' }
// ];


// var score; // 변수 선언(변수 선언문)
// console.log(score); // undefined


// var score;  // 변수 선언
// score = 80; // 값의 할당

// var score = 80; // 변수 선언과 값의 할당
// console.log(score); // 80


// 호이스팅(hosting)
// 변수 선언문은 코드가 실행되기 전에 먼저 실행된다.
// 실행된 선언문은 변수 선언을 위한 메모리 공간을 확보한다.
// 따라서 변수 선언문이 실행되기 전에 변수를 참조할 수 있다.
// 하지만 변수 선언문이 실행되기 전에 변수를 참조하면 undefined가 반환된다.
console.log(score); // undefined

score = 80; // 값의 할당
var score;  // 변수 선언

console.log(score); // ?? -> 80


// 권장하지 않는 변수 이름 방식
var person, $elem, _name, first_name, val1;

// var first-name; // SyntaxError: Unexpected token –
// var 1st;        // SyntaxError: Invalid or unexpected token
// var this;       // SyntaxError: Unexpected token this

var firstname;
var firstName;
var FIRSTNAME;


// 카멜 케이스 (camelCase)
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase)
var FirstName;

// 헝가리언 케이스 (typeHungarianCase), 요즘 잘 안쓰는 듯?
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블

