var todos = [
  { id: 3, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true},
  { id: 1, content: 'Javascript', completed: false}
]

 //1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
 //=> [3, 2, 1]

  function getIdValue(){ 
  return todos.map(function(todo, index, arr){
  return  todo.id;
 });
}
console.log(getIdValue());

 
//2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3
var arr = getIdValue();
function Max(){
  return Math.max.apply(null, arr);
}
console.log(Max());


//3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라.

function newAdd(){
return [{ id: 4, content: 'Test', completed: false }].concat(todos);
}
console.log(newAdd());

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라

function removeId4(){
return todos.filter(function(todo){

  return todo.id !== 4

});
}
console.log(removeId4());
