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
// var sum = '';
// var tree = '';
// for(var i = 1; i <= 8; i++){
//   if(i <= 3){
//     sum = sum+'*';
//     console.log(sum)
//   }
//   else if(i <= 8){
//     tree = tree+'*';
//     console.log(tree)
//   }
// }

12.
// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// var numJewelsInStones = function(J, S) {
//     var number = 0;
    
//     for(var i = 0; i < S.length; i++) {
      
//       if(J.indexOf(S[i]) > -1){  
//         number++;
//     }

//     return number;
// }
// };

// console.log(numJewelsInStones('aA', 'aAAbbbb'));

13.

// function getCount8(){
//   var number = 0;
//   var str = '';

//   for(var i = 0; i < 10000; i++){

//     str += i;

//   }

//   for(var j = 0 ; j < str.length; j++){

//     if(str[j] === '8'){
//       number++;
//     }
//   }
//   return number;
// }
// console.log(getCount8());

14.
// function hidenNumbers(str){

//   var numbers = str.substring(str.length-4);
//   var sum = '';
//   for(var i = 0; i < str.length-4; i++ ){
//     sum += '*';
    
//   }  
//   return sum+numbers;

// }
// console.log(hidenNumbers('01033334444'));

15.
// function evenOrOdd(num){
  
//   if(num %2 === 0){
//     return 'even';
//   }
//   else {
//     return 'odd';
//   }
// }
// console.log(evenOrOdd(9));

// function evenOrOdd(num){
//   return (num %2 === 0 ?  'even' : 'odd');
// }
// console.log(evenOrOdd(20));
16.
// function alphaString46(s){

  
//     if( isNaN(s) || s.length < 4 || s.length > 6 ){
//       return 'flase'
//     }
//     else if(s.length > 3 && s.length < 7){
//       return 'true'
//     }
  
// }
// console.log(alphaString46('a1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723'));  // false
// console.log(alphaString46(''));     // false
// console.log(alphaString46());       // false

17.
// function numPY(s) {

//   var pcount = 0;
//   var ycount = 0;

//   if(s === undefined){
//     return true;
//   }

//   for(var i = 0; i < s.length; i++){
//     if(s[i] === 'p' || s[i] === 'P'){
//       pcount++;
//       // console.log(pcount);
//     }
//     else if(s[i] === 'y' || s[i] === 'Y'){
//       ycount++
//     }
//   }
//   if( pcount === ycount) {
//     return true;
//   }
//   else{
//     return false;
//   }

// }
// // console.log(numPY('pPoooyY')); // true
// // console.log(numPY('Pyy'));     // false
// // console.log(numPY('ab'));      // true
// // console.log(numPY(''));        // true
// console.log(numPY());          // true

// 18.

// function toWeirdCase(s) {

// var splitword = s.split(' ');

// var sp = '';

// for(var i = 0; i < splitword.length; i++){
//   for(var j = 0; j < splitword[i].length; j++) {
//     if(j%2 === 0){
//       sp += splitword[i][j].toUpperCase();
//     }
//     else{
//       sp += splitword[i][j].toLowerCase();
//     }
//   }
//   sp += ' ';
// }

// //console.log(sp.length, sp.trim().length);
// return sp.trim();
// }
// console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'

// 19.
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//     var str = s.split(' ');
//     var str1 = '';
//     var str2 = ' ';
//     for(var i = 0; i < str.length; i++){
      
//         str1 += str[i].split('').reverse().join('');
//         str1 += str2;
//     }
//       return str1.trim();
//   }
// console.log(reverseWords("Let's take LeetCode contest"));

20. 
// function strToInt(str){
    
//     return parseInt(str);
//     // return +str;

// }
// console.log(strToInt('1234'));
// console.log(strToInt('-1234'));

21.
// function nextSqaure(n){

//     var res;
//     var number = Math.sqrt(n);
//     Number.isInteger(number)

//     if(Number.isInteger(number)){
//         res = Math.pow(number+1, 2);
//     }
//     else{
//         res ='no';
//     }
//     return res;
//     // if(Math.sqrt(n)){
//     //     return Math.pow(number+1, 2);
//     // }
//     // else if(!Math.pow(number) ){
        
//     //     return 'no';
//     // }
// }
// console.log(nextSqaure());    // no
// console.log(nextSqaure(0));   // 1
// console.log(nextSqaure(1));   // 4
// console.log(nextSqaure(2));   // no
// console.log(nextSqaure(3));   // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441

22.
// function waterMelon(n){

//     var str = '';
    

//     for(var i = 1; i <= n; i++){
//         console.log(i);
//         // if(i === 1 && n === 1){
//         //     return '수';
//         // }
//         // else if( i%2 === 0 ){
//         //      str = str+'수박' ;
//         //     }     
//         //     // else if( i%2 === 1){
//         //     //          str1+='수박';
//         //     //         }
//         //     //         str2 = str1+'수';
//         //     //         return str2;
                
//         if(i%2 === 1){
//             str += '수';
//         }
//         else if(i%2 === 0){
//              str += '박';
//         }
    
//     }
    
//             return str;
//         // return str1;
// }
// console.log(waterMelon(5));

23.
// function checkPalindrom(str) {
//     return str === str.split('').reverse().join('');
//     // console.log(str.split('').reverse().join(''));
// }

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // false

24.
function getMaxValueFromArray(array) {

    return Math.max.apply(null, array)
    // Math.max 인수중 가장 큰 수를 반환하는데, 인수가 배열인 상황이다.
    // 배열인 인수를 해체해서 함수의 매개변수에 넣기 위해 apply 메소드를 사용했다.
    // apply 메소드의 인자 값은 첫번째로 this가 될 대상으로 필수로 입력해야하며, 이 함수에서는 null로 주었다. 두번째로 Math.max가 사용 할 인수를 입력했다. 
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {

    return Math.min.apply(null, array)
    // Max.min 인수중 가장 작은 수를 반환하는데, 인수가 배열인 상황이다.
    // 배열인 인수를 해체해서 함수의 매개변수에 넣기 위해 apply 메소드를 사용했다.
    // apply 메소드의 인자 값은 첫번째로 this가 될 대상으로 필수로 입력해야하며, 이 함수에서는 null로 주었다. 두번째로 Math.max가 사용 할 인수를 입력했다. 
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5