import { useEffect, useState } from "react";
const baseUrl='http://localhost:4000';

const App=()=>{
  const [todoList, setData]=useState([]);
  // const [text, setText]=useState('');


  const fetchData=()=>{
    fetch(baseUrl+'/api/todo').then(res=>res.json()).then(data=>{setData(data)});
  }
  // 서버로부터 데이터를 가져오는(fetch)코드 
  useEffect(()=>{
    fetchData();
  },[])


  //서버로 데이터를 보내주는 직접적인 역할을 하는 함수. 함수안에 있는 fetch API궁성 주목하여 보기
  const onSubmitHandler=(e)=>{
    e.preventDefault();//생략시 GET 요청(request)으로 진행되며(default) 이에따라 주소창의 url이 바뀌는 것을 확인할 수 있다^^
    const text=e.target.text.value;
    const done=e.target.done.checked;
    fetch(baseUrl+'/api/todo',{
      //fetch API를 사용하여 데이터를 post할때는 반드시 아래와 같이 method, headers, body를 추가해 주어야 한다. 
    method:'POST',//소문자도 가능
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      text,
      done,
    }),}).then(()=>fetchData());
  };

  // const inputHnadler=(e)=>{
  //   setText(e.target.value);
  // }
  
  return(
    <div className='App'>
      <h1>TodoList</h1>

      {/* 서버로 보낼 데이터를 입력해주는 input창의 전형전인 폼*/}
      <form onSubmit={onSubmitHandler}>
        {/* 아래와 같이 input태그의 속성을 주지 않아도 다다음 줄에서 한것처럼 input태그의 value를 취할 수 있다. */}
        {/* <input name='text' value={text} onChange={inputHnadler}></input> */}
        <input name='text'></input>
        <input name='done' type="checkbox"></input>
        <input type="submit" value='추가'></input>
      </form>

      {/* 서버로부터 가져온 데이터를 화면에 뿌려줌 */}
      {todoList.map(todo=>(
        <div key={todo.id} style={{display:"flex"}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done?'Yes':'No'}</div>
        </div>
      ))}
    </div>
  );
};

export default App;