1.
// for(var i= 1; i < 10; i++){

//   if(i % 2 === 0){
//   console.log(i)
//   }
// }
2.
// var str= '';
// for(var i=0; i < 10; i++){
//   if(i % 2 === 0){
//     str= str+i;
//   }
// }
// console.log(str)
3.
// for(var i= 10; i > 0; i--){
//   if(i % 2 === 1){
//     console.log(i)
//   }
// }
4.
// var i= 0;
// while(i < 10){
//   i++;
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }
5.
// var i = 10;
// while( i > 0){
//   i--;
//   if(i % 2 === 1){
//     console.log(i)
//   }
// }
6.
// var j = 0;
// for(var i = 0; i < 10; i++){

//   j = i+j;
 
// }
// console.log(j)
7.
// var j = 0;

// for(var i = 1; i < 20; i++){
//   if(i % 2 !== 0 && i % 3 !== 0 ){
//     j = j+i;
    
//   }
// }
// console.log(j)
8.
// var j = 0;
// for(var i = 0; i <= 20; i++){
//   if(i % 2 === 0 || i % 3 === 0){
//     j = j+i;
//   }
// }
// console.log(j)
9.

// for(var i = 1; i <= 6; i++){
//   for(var j = 1; j <= 6; j++ ){
//     if(i+j === 6){
//       console.log([i, j])       
//     }
//   }
// }
10.
// var sum = '';
// for(var i = 1; i <=5; i++){
//    sum = sum+'*';
//   console.log(sum) 
// }
11.
var sum = '';
var tree = '';
for(var i = 1; i <= 8; i++){
  if(i <= 3){
    sum = sum+'*';
    console.log(sum)
  }
  else if(i <= 8){
    tree = tree+'*';
    console.log(tree)
  }
}