import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
//마찬가지로 useContext를 사용할 것이므로 props는 모두 삭제한다.
const Content=()=>{
    const {isDark}=useContext(ThemeContext);
    const user=useContext(UserContext);
    return (
        <div className="content"
        style={{background:isDark?'black':'white',
        color:isDark?'white':'black',}}>
            <p>{user}님, 좋은 하루되세요</p>
        </div>
    );   
};
export default Content;

