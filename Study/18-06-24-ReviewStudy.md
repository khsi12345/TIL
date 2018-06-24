# Javascript Review

##Ajax  
자바스크립트를 이용해서 비동기적으로 서버와 브러우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.  

서버로부터 웹페이지가 반환되면 화면 전체를 갱신해야 하는데 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있도록 해준다.  

ex) 사용자가 메시지를 입력하면 대화창만 갱신하는 경우, 대화창에 입력될 메시지만 갱신하는 경우  

## JSON  
클라이언트와 서버 간에는 데이터 교환이 필요하다.  
데이터 교환을 위한 규칙, 즉 데이터 포맷을 말한다.  
일반 텍스트 포맷보다 효과적인 데이터 구조화가 가능하며 XML 포맷보다 가볍고 사용하기 간편하며 가독성도 좋다.  

순수한 텍스트로 구성된 규칙이 있는 데이터 구조이다.  
ex)  
{  
  "name": "Lee",  
  "gender": "male",  
  "age": 20,  
  "alive": true  
}  
키와 밸류로 이뤄져있는데 키는 반드시 큰따옴표로 둘러싸야 한다.  

1. JSON.stringify  
객체를 JSON 형식의 문자열로 변환한다.  

ex)  
var info = {  
  name: 'Lee',  
  gender: 'male',  
  age: 20  
};  
  
// 객체 => JSON 형식의 문자열  
var strObject = JSON.stringify(info);  
console.log(typeof strObject, strObject);  
// string {"name":"Lee","gender":"male","age":20}    

2. JSON.parse  
JSON 데이터를 가진 문자열을 객체로 변환한다.  

## XMLHttpRequest  
브라우저는 XMLHttpRequewt 객체를 이용하여 Ajax 요청을 생성하고 전송한다.  

ex)   
// XMLHttpRequest 객체의 생성  
var xhr = new XMLHttpRequest();  

1. XMLHttpRequest.open    
XMLHttpRequest 객체의 인스턴스를 생성하고 XMLHttpRequest.open 메소드를 사용하여 서버로의 요청을 준비한다.    

매개변수로는 method, url을 가진다.  
method: HTTP method로 GET / POST / PUT / DELETE 등이 있다.  
url: 요청을 보낼 URL  

2. XMLHttpRequewt.send  
준비된 요청을 서버에 전달한다.  

서버로 전송하는 데이터는 GET / POST 메소드에 따라 전송 방식에 차이가 있다.  
GET: 데이터를 URL의 일부분인 쿼리문자열로 서버에 전송한다.  
POST: 데이터를 Request Message의 Body에 담아 서버에 전송한다.  

매개변수에 Request body에 담아 전송할 인수를 전달할 수 있다.  
메소드가 GET인 경우 인수는 무시되고 Request body는 null로 설정된다.  

3. XMLThhpRequest.setRequestHeader  
Http Request Header의 값을 설정한다.  
반드시 XMLHttpRequest.open 메소드 호출 이후에 호출한다.  

첫번째 인자로 Content-type, Accept가 온다.  

Content-type: request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다.  

MIME-type
text type: text/plain, text/html, text/css, text/javascript.  
Application type: application/json, application/x-www-form-urlencode.  

ex)  
// json으로 전송하는 경우  
xhr.open('POST', '/users');  

// 클라이언트가 서버로 전송할 데이터의 MIME-type 지정: json  
xhr.setRequestHeader('Content-type', 'application/json');  

var data = { id: 3, title: 'JavaScript', author: 'Park',price: 5000};  

xhr.send(JSON.stringify(data));  

Accept: HTTP 클라이언트가 서버에 요청할 때 서버가 반환할 데이터의 MIME-type을 지정할 수 있다.    


XMLHttpRequest.send 메소드를 통해 서버엣 Request를 전송하면 서버는 Response를 반환한다.  
하지만 언제 Response가 클라이언트에 도달할 지는 알 수 없다.  
XMLHttpRequest.onreadystatechange는 Response가 클라이언트에 도달하여 발생된 이벤트를 감지하고 콜백함수를 실행하여 준다.  

XMLHttpRequest 객체는 response가 클라이언트에 도달했는지를 추적할 수 있는 readXMLHttpRequest.readyState 프로퍼티를 제공한다.  

readXMLHttpRequest.readyState  
Value  
0 : XMLHttpRequest.open() 호출 이전.  
1 : XMLHttpRequest.open() 호출 완료.  
2 : XMLHttpRequest.send() 호출 완료.  
3 : 서버 응답 중.  
4 : 서버 응답 완료.  


