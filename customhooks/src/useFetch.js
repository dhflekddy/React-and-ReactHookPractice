//useFetch 커스텀 훅 생성
import { useEffect } from "react";
import { useState } from "react";

const useFetch=(baseUrl, initialType)=>{
  const[data, setData]=useState(null);

  const fetchUrl=(type)=>{
    fetch(baseUrl+'/'+type).then(result=>result.json()).then(result=>setData(result));
  };
  useEffect(()=>{
    fetchUrl(initialType);
  },[]);

  return {data, fetchUrl};
};

export default useFetch;