const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 변수명 관습. 안중요하고 문자열 저장하는 변수는 대문자로 (반복되는 문자열 실수 방지) 
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 새로고침 동작을 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼을 숨김
    const username = loginInput.value; // 인풋에 입력한 값을 변수에 저장
    localStorage.setItem(USERNAME_KEY, username); // 로컬 저장소에 값을 저장
    paintGreeting(username); // 함수 실행. 인풋에 입력받은 데이터를 함수에 전달. 
}

// 반복되는 코드는 함수로 만들어서 사용
function paintGreeting(username){ // 입력받은 username을 화면에 띄워주는 함수
    greeting.innerText = `Hello ${username}`; // 백틱 ` 사용해서 변수 + 문자열 연결 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬 저장소에서 키값으로 value 찾기. 만약에 value가 없으면 null을 반환한다. 
const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){ // 로컬 저장소에 데이터가 없으면 
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼이 보이고 
    loginForm.addEventListener("submit",onLoginSubmit); // submit 이벤트를 기다림
}else{ // 로컬 저장소에 데이터가 있으면 
    paintGreeting(savedUsername); // 함수 실행. 로컬 저장소에 있는 데이터를 함수에 전달.
}