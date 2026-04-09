for(let num = 0; num < 10; num++){  
// --> 결국은 1씩 증가하다가 10이되어 정지되는 때가 온다. 꼭 있어서 정지시켜야함.
    console.log(num)
}
// 0이 인쇄됨 == num < 10 --> console.log(num)의 순서임

const 꽃 = ["벗꽃","개나리","라일락","목련"]; // --> 배열

//for(i in 꽃){
   // console.log(`${i}번 꽃은? ${꽃[i]}`)
//}
//for (i of 꽃){
  //  console.log(i)
//}

꽃.forEach(function(i,v){
    console.log(i,v)
}) 

// 배열만 상대해서 풀어헤침
