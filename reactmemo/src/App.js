import React from 'react';
import {useState} from 'react';
import Child from './Child';

const App=()=>{
  const[parentAge, setParentAge]=useState(0);
  const[childAge, setChildAge]=useState(0);
  const incrementParentAge=()=>{
    setParentAge(parentAge+1);
  };
  const increamentChildAge=()=>{
    setChildAge(childAge+1);
  }
  console.log("부모 컴포넌트가 랜더링되었어요")
  return(
    <div style={{border:'2px solid navy',padding:'10px'}}>
      <h1>부모</h1>
      <p>age:{parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={increamentChildAge}>자식 나이 증가</button>
      <Child childName='홍길동' childAge={childAge} />
    </div>  
  );
};
export default App;