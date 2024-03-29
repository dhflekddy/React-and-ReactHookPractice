import React,{useState} from 'react';
import './App.css'
import Page from './components/Page'
const App=()=>{
  const[isDark, setIsDark]=useState();
return(
  <Page isDark={isDark} setIsDark={setIsDark}></Page>
  
);
};

export default App;