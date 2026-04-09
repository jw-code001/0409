let count = 100;
count = 10;
// let count = 10; --> 두번 let 안됨

count = count +10; // ---> count += 10;과 동일 --> 20
count -= 2; // --> 18
count++; // --> 18
++count; // --> 20

console.log(count) // --> 20
console.log(count++) // --> 20
console.log(++count) // --> 22

//----------------------------------------------------

let count = 10;
let result = count++; // 1. result에 현재 count값(10)을 먼저 넣습니다.
                      // 2. 그 다음 count가 11이 됩니다.

console.log(result); // 10 (증가 전 값이 들어감)
console.log(count);  // 11 (값은 결국 증가함)