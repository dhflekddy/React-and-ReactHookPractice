// import { useRef } from "react";
// import { useState } from "react";
import useInput from "./useInput";

const displayMessage=(message)=>{
  alert(message);
}
const App=()=>{
    //아래 4개의 상태, 함수를 커스텀 훅으로 묶어보고자한다
  // const [inputValue,setInputValue]=useState('');

  // const inputHandler=(e)=>{
  //   setInputValue(e.target.value);
  // }

  // const buttonHandler=()=>{
  //   alert(inputValue);
  //   setInputValue('');
  //   ref.current.focus();
  // }
  // const ref=useRef();

  //useInput이라는 커스텀 훅 안의 내용을 모르면 온전히 코드를 해석할 수 없다. 리엑트에서는 그렇다...
  const[inputValue, inputHandler,ref, buttonHandler]= useInput("HiRoo", displayMessage);
  return(
    <div>
      <h2>useInput</h2>
      <input value={inputValue} onChange={inputHandler} ref={ref}></input>
      <button onClick={buttonHandler}>확인</button>
    </div>

  );
  
};
export default App;