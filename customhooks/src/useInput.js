import {useState, useRef } from "react";
//아직 확실히는 모르겠지만 커스텀훅이 컴포넌트를 만드는 것과 조금 다른점은 props를 전달할때 따로 중괄호를 사용하지 않는다는 것이다. 
const useInput=(initialValue, submitAction)=>{

    const [inputValue,setInputValue]=useState(initialValue);
    //커스텀훅이 적용되는 App.js의 랜더링되는 return코드와 연관시켜 보아야 하므로 처음엔 조금 어렵게 느껴질수 있다. 
    const inputHandler=(e)=>{
      setInputValue(e.target.value);
    }
  
    const buttonHandler=()=>{
      submitAction(inputValue);
      setInputValue('');
      ref.current.focus();
    }
    const ref=useRef();
  
    return[inputValue,inputHandler, ref, buttonHandler];
};
export default useInput;