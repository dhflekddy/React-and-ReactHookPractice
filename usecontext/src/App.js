import { ThemeContext } from "./Context/ThemeContext";
import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { UserContext } from "./Context/UserContext";
const App = () => {
  const [isDark, setIsDark] = useState();
  return (
    //Context컴포넌트 하위에 있는 모든 컴포넌트는 Context가 value로 받은 모든 state를 공통으로 이용할 수 있다. 물론 useContext사용해야함)
    <UserContext.Provider value={"Joe"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page isDark={isDark} setIsDark={setIsDark}></Page>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
