//Socket.io에 대한 상세 설명: https://inpa.tistory.com/entry/SOCKET-%F0%9F%93%9A-SocketIO-%EC%82%AC%EC%9A%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0
//JS서버 구성의 기초
const express=require("express");
const app=express();
const path=require("path");
const http=require("http");
const server=http.createServer(app);//app도 express라는 서버지만 그 서버에 http관련 기능을 추가해 주도록 하는 코드. 이게 진짜 서버
//==>>우리가 사용하는 소켓은 웹소켓이기 때문에 http를 통해서 이루어져야 합니다.

const socketIO=require("socket.io");
const ios=socketIO(server);
//__dirname은 현재 디렉토리를 나타내는 변수다. 즉, console.log(__dirname); 해보면 현재 디렉토리가 출력됨을 확인할 수 있다 
app.use(express.static(path.join(__dirname,"/src")));
//내 서버를 실행하면 어떠한 화면을 출력할지를 설정하는 코드이다. 현재디렉토리안에 있는 src폴더 안에 있는 index.html을 실행해줌. 
//알고 있듯이 index.html은 처음으로 서버가 찾는 웹페이지의 이름이다. 

const PORT=process.env.PORT || 5000;//이미 지정해 놓은 port가 있다면 그 포트로, 만약 없다면 5000번 포트를 사용하겠다는 의미. 어떻게 인위적으로 지정해주는
//지는 모르겠지만 나는 5000이 출력된다. 

//서버와의 연결(connection)이 이루어지면 모든 내용이 socket에 들어감
ios.on("connection",(socket)=>{//서버와의 연결이 이루어짐. connection 이벤트는 클라이언트가 접속했을 때 발생하며, 콜백으로 소켓 객체를 제공한다.
    console.log("클라이언트가 접속하면 자동으로 connection이벤트가 발생합니다")
    socket.on("chatting",(data)=>{   //socket 객체는 개별 클라이언트 객체를 의미
        console.log(data);
        ios.emit("chatting",data);//서버(ios)가 data를 모든 사용자에게 발송함.  ios객체는 연결된 전체 클라이언트와의 상호작용을 위한 객체
        //ios객체를 통해 클라이언트로 메시지를 보내는 것 외에도 위의 socket만을 이용해서도 클라이언트들에게 데이터를 전송할 수 있음
    })
})//여기서의 socketIO를 나타내는 ios는 chat.js파일의 io()와는 별개임(io()는 함수임)!!!



server.listen(PORT, ()=>console.log(`Server is running at ${PORT}`));
