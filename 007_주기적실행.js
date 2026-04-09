// setInterval
// setTimeout

// // 무한순환

let 증가 = 0;
// setInterval(function(){
//     // ++증가; --> 1 2 3 4 0
//     증가 %= 5; // 나누었을때 나머지 ---> 0~4가 순환됨
//     console.log(증가);
//     ++증가; // --> 0 1 2 3 4
// }, 1000) // 1초쉬고 매 1초마다
// // 이름없는 함수는 안불러도 그냥 실행되어 버림

// setInterval(function(){
//     ++증가;
//     if(증가 < 10){
//         console.log(증가)
//     }
// }, 1000)

// 단순 자바스크립트 훈련이야. 그냥 setInterval 을 멈추는 것만 알려줘 1초마다 1씩 증가하는데 10이되면 멈춰
// setInterval이 자원을 계속 사용해서 무거워짐. clearInterval을 1:1 매칭해서 없애야함.

const autoplay = setInterval(function(){ // autoplay는 함수선언 아님?????????????? 이름만 붙은 interval임. clear가 죽일때 누군지 알아야함.
    ++증가;
    if(증가 == 10){
        clearInterval(autoplay);
        console.log("책임감있는 개발")
    }
}, 1000)
