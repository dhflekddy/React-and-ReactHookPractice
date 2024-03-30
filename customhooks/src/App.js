import { useState } from "react";
import { useEffect } from "react";

const baseUrl='https://jsonplaceholder.typicode.com';

const App=()=>{
  
  //아래 네트워크를 통해 데이터를 fetch해 오는 과정(return 문전까지)을 custom훅을 사용해 하나의 useFetch(커스텀 훅)로 만들어 보자 
  const[data, setData]=useState(null);

  const fetchUrl=(type)=>{
    fetch(baseUrl+'/'+type).then(result=>result.json()).then(result=>setData(result));
  }
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts').
    // then(result => result.json()).
    // then(result =>console.log(result));
    fetchUrl('users');
  },[]);

  return(
    <div>
      <h2>useFetch</h2>
      <button onClick={()=>fetchUrl('users')}>users</button>
      <button onClick={()=>fetchUrl('posts')}>posts</button> 
      <button onClick={()=>fetchUrl('photos')}>photos</button>

      <pre>{JSON.stringify(data,null, 1)}</pre>
    </div>
  );
};

export default App;