import React, {useMemo,useCallback } from 'react';
import {useState} from 'react';
import Child from './Child';

const App=()=>{
  const[parentAge, setParentAge]=useState(0);
  const incrementParentAge=()=>{
    setParentAge(parentAge+1);
  };
  console.log("부모 컴포넌트가 랜더링되었어요")
  // const tellMe=()=>{
  //   console.log("길동아 사랑해~");
  // }
  
  //값을 반환한느 useMemo
  // const tellMe=useMemo(()=>{return ()=>{
  //   console.log("길동아 사랑해~~")
  // }},[])

  //함수 자체를 반환하는 useCallback
  const tellMe=useCallback(()=>{
    console.log("길동아 사랑해~~~")
  },[])
 
  return(
    <div style={{border:'2px solid navy',padding:'10px'}}>
      <h1>부모</h1>
      <p>age:{parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      {/* 정석대로라면 부모컴포넌트가 랜더링되면서 Child라는 자식컴포넌트까지 랜더링이 순차적으로 이루어지는 것이 정석이다. 하지만 Child컴포넌트에서 React.memo
      를 사용함으로써 자식으로 전달되는 props에 변화가 없다면 랜더링을 막아줄수 있게 된 것이다 */}
      <Child childName={"홍길동"} tellMe={tellMe}/>
    </div>  
  );
};
export default App;