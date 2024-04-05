//Socket.io에 대한 정확하고 유용한 정보 => https://inpa.tistory.com/entry/SOCKET-%F0%9F%93%9A-SocketIO-%EC%82%AC%EC%9A%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0 
//index.html을 확인해 보면 알겠지만 순전히  <script src="/socket.io/socket.io.js"></script> 로 제공되는 socket라이브러리 덕분에 아래의 io()가 동작하는 것임
"use strict"
const socket=io();//소켓(socket)객체 생성

const nickname=document.querySelector("#nickname");//querySelector사용시 css선택자를 그대로 사용할 수 있음
const chatList=document.querySelector(".chatting-list");
const chatInput=document.querySelector(".chatting-input");
const sendButton=document.querySelector(".send-button");

sendButton.addEventListener("click", ()=>{
    const param={
        name: nickname.value,
        msg:chatInput.value,
    }
    socket.emit("chatting", param)// 이렇게 어떠한 이벤트를 개발자가 임의로 문자열을 지정하여 설정한다는 것이 정말 낯설다. 
});


socket.on("chatting", (data)=>{
    const li=document.createElement("li");
    li.innerText=`${data.name}: ${data.msg}`
    chatList.appendChild(li);
    console.log(data);
});


// socket.on("connect", ()=>{
//     console.log(socket.connected);
// });
// console.log("👨‍💻👨");
// console.log("123")
// console.log(socket);


