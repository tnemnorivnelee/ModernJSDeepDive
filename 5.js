// Literal: 데이터 그대로의 값??
// 예를 들어, 10 + 20은 리터럴이다. 이 표현식은 30이라는 값을 생성한다.
// 변수에는 10 + 20이 평가되어 생성된 숫자 값 30이 할당된다.
// 따라서 변수 sum은 30이라는 값을 갖는다.
var sum = 10 + 20;


var x = 1 + 2;
// 식별자 표현식 x는 3으로 평가된다.
console.log(x + 3); // -> 6
console.log();




// // 변수 선언문
// var x;

// // 표현식 문(할당문)
// x = 5;

// // 함수 선언문
// function foo () {}

// // 조건문
// if (x > 1) { console.log(x); }

// // 반복문
// for (var i = 0; i < 2; i++) { console.log(i); }



// 자동 세미콜론 삽입(ASI, Automatic Semicolon Insertion)
// 자바스크립트 엔진은 문장의 끝에 세미콜론이 없으면
// 문장의 끝에 세미콜론을 자동으로 삽입한다.
function foo () {
  return
    {}
  // ASI의 동작 결과 => return; {};
  // 개발자의 예측 => return {};
}

console.log(foo()); // undefined

var bar = function () {}
(function() {})();
// ASI의 동작 결과 => var bar = function () {}(function() {})();
// 개발자의 예측 => var bar = function () {}; (function() {})();
// TypeError: (intermediate value)(...) is not a function




// 표현식이 아닌 문은 값처럼 사용할 수 없다.
var foo = var x; // SyntaxError: Unexpected token var




// 변수 선언문은 표현식이 아닌 문이다.
var x;
// 할당문은 그 자체가 표현식이지만 완전한 문이기도 하다. 즉, 할당문은 표현식인 문이다.
x = 100;





// 표현식인 문은 값처럼 사용할 수 있다
var foo = x = 100;
console.log(foo); // 100