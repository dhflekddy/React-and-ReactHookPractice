import { useRef } from "react";
import { useState } from "react";

const App=()=>{
  const [inputValue,setInputValue]=useState('');

  //아래 3개의 함수를 커스텀 훅으로 묶어보고자한다
  const inputHandler=(e)=>{
    setInputValue(e.target.value);
  }

  const buttonHandler=()=>{
    alert(inputValue);
    setInputValue('');
    ref.current.focus();
  }
  const ref=useRef();

  return(
    <div>
      <h2>useInput</h2>
      <input value={inputValue} onChange={inputHandler} ref={ref}></input>
      <button onClick={buttonHandler}>확인</button>
    </div>

  );
  
};
export default App;