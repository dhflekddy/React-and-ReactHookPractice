
import React from "react";
import { ThemeContext} from "../Context/ThemeContext";
import { useContext } from "react";
//마찬가지로 useContext를 사용할 것이므로 props를 모두 삭제
const Footer=()=>{
    const {isDark, setIsDark}=useContext(ThemeContext);
    const toggleTheme=()=>{
        setIsDark(!isDark);
    };
    return(
    <footer className="footer"
    style={{backgroundColor:isDark?'black':'lightgray',}}>

        <button className="button" onClick={toggleTheme}>Dark Mode</button>
    </footer>);
};
export default Footer;


