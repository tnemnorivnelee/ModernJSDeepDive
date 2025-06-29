var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1




var x = 5, result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (prefix decrement operator)
result = --x;
console.log(result, x); // 5 5




var x  = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
console.log(typeof +x) // "number"
// 부수 효과는 없다.
console.log(x);  // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
console.log(typeof +x) // "number"
// 부수 효과는 없다.
console.log(x);  // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x);  // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
console.log(typeof +x) // "number"  
// 부수 효과는 없다.
console.log(x);  // "Hello"




console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + '2'); // "12" (문자열 연결)
console.log('1' + 2); // "12" (문자열 연결)
console.log('1' + true); // "1true" (문자열 연결)
console.log(+undefined); // NaN






var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Lee'; // str = str + 'Lee';
console.log(str); // 'My name is Lee'



var x;

// 할당문은 표현식인 문이다.
console.log(x = 10); // 10
console.log(x); // 10



var a, b, c;

// 연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// ① c = 0 : 0으로 평가된다
// ② b = 0 : 0으로 평가된다
// ③ a = 0 : 0으로 평가된다
a = b = c = 0;

console.log(a, b, c); // 0 0 0





console.log(5 == '5'); // true
console.log(5 === '5'); // false


// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false


console.log(Number.isNaN(NaN)); // true


// Object.is 함수는 두 값을 비교하여 일치 여부를 확인한다.
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

// isNan 함수 말고 Number.isNaN 함수를 사용하여 NaN을 확인하는 것이 좋다.
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); // -> true
Number.isNaN(10);  // -> false
Number.isNaN(1 + undefined); // -> true


console.log((5).toString()); // "5"
console.log(5 + ''); // "5" (문자열 연결)
console.log(String(5)); // "5" (문자열로 변환)
console.log(+'1234'); // 1234 (문자열을 숫자로 변환)
console.log(typeof +'1234'); // "number" (숫자 타입)



// Object.is 함수는 두 값을 비교하여 일치 여부를 확인한다.
// 이 함수는 === 연산자와 유사하지만, 몇 가지 특별한 경우를 다르게 처리한다.
// 예를 들어, -0과 +0은 === 연산자에서는 같지만, Object.is 함수에서는 다르다.
// 또한, NaN은 === 연산자에서는 같지 않지만, Object.is 함수에서는 같다.
-0 === +0;         // -> true
Object.is(-0, +0); // -> false

NaN === NaN;         // -> false
Object.is(NaN, NaN); // -> true







var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수




var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = '홀수';
else       result = '짝수';

console.log(result); // 짝수





var x = 10;

// if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
// var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// SyntaxError: Unexpected token if


var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 







// 논리합(||) 연산자
true || true;   // -> true
true || false;  // -> true
false || true;  // -> true
false || false; // -> false

// 논리곱(&&) 연산자
true && true;   // -> true
true && false;  // -> false
false && true;  // -> false
false && false; // -> false

// 논리 부정(!) 연산자
!true;  // -> false
!false; // -> true






// 암묵적 타입 변환
!0;       // -> true
!'Hello'; // -> false
!!'';     // -> false
!!1;      // -> true



// 단축 평가 ?????
'Cat' && 'Dog'; // -> 'Dog'
'Cat' || 'Dog'; // -> 'Cat'



// 드모르간 법칙
// 논리합과 논리곱의 부정은 드모르간 법칙에 따라 변환할 수 있다.
// 드모르간 법칙에 따르면, 다음과 같은 등식이 성립한다.
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)




var x, y, z;

x = 1, y = 2, z = 3; // 3







typeof ''              // -> "string"
typeof 1               // -> "number"
typeof NaN             // -> "number"
typeof true            // -> "boolean"
typeof undefined       // -> "undefined"
typeof Symbol()        // -> "symbol"
typeof null            // -> "object" ?????
typeof []              // -> "object" ?????
typeof {}              // -> "object"
typeof new Date()      // -> "object"
typeof /test/gi        // -> "object"
typeof function () {}  // -> "function"






2 ** 2;   // -> 4
2 ** 2.5; // -> 5.65685424949238
2 ** 0;   // -> 1
2 ** -2;  // -> 0.25


Math.pow(2, 2);   // -> 4
Math.pow(2, 2.5); // -> 5.65685424949238
Math.pow(2, 0);   // -> 1
Math.pow(2, -2);  // -> 0.25



// 지수 연산자의 결합 순서는 우항에서 좌항이다. 즉, 우결합성을 갖는다.
2 ** (3 ** 2); // -> 512
Math.pow(2, Math.pow(3, 2)); // -> 512










var x;

// 할당 연산자는 변수 값이 변하는 부수 효과가 있다.
// 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x = 1;
console.log(x); // 1

// 증가/감소 연산자(++/--)는 피연산자의 값을 변경하는 부수 효과가 있다.
// 피연산자 x의 값이 재할당되어 변경된다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x++;
console.log(x); // 2

var o = { a: 1 };

// delete 연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
// 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
delete o.a;
console.log(o); // {}