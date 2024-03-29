import React, { useMemo } from 'react';
import {useState} from 'react';
import Child from './Child';

const App=()=>{
  const[parentAge, setParentAge]=useState(0);
  const incrementParentAge=()=>{
    setParentAge(parentAge+1);
  };
  console.log("부모 컴포넌트가 랜더링되었어요")
  /**
   * 잘 알고 있듯이 아래 변수 name은 객체이다. 리랜더링이 될때마다 객체의 주소는 바뀌게 된다. 이에 따라 React.memo를 사용했음에도 불구하고
   * 자식컴포넌트까지 계속해서 덩달아 랜더링되는 문제가 발생하는 것이다. 이를 해결하기 위해 useMemo를 사용한다.
   */
  // const name={
  //   lastName:'홍',
  //   firstName:'길동',
  // }
  
  
  const name=useMemo(()=>{return {lastName:'홍', firstName:'길동'}}, []);//이렇게 해줌으로써 자식컴포넌트로 전달되는 props가 객체를 담은 변수더라도
  //불필요한 랜더링이 실행되는 것을 막을 수 있다

  return(
    <div style={{border:'2px solid navy',padding:'10px'}}>
      <h1>부모</h1>
      <p>age:{parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      {/* 정석대로라면 부모컴포넌트가 랜더링되면서 Child라는 자식컴포넌트까지 랜더링이 순차적으로 이루어지는 것이 정석이다. 하지만 Child컴포넌트에서 React.memo
      를 사용함으로써 자식으로 전달되는 props에 변화가 없다면 랜더링을 막아줄수 있게 된 것이다 */}
      <Child childName={name} />
    </div>  
  );
};
export default App;