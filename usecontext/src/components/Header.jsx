import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

// import 
//이제는 더이상 props가 아닌 context를 사용하므로 기존에 있던 props를 모두 삭제한다
const Header=()=>{
    const {isDark}=useContext(ThemeContext);
    const user=useContext(UserContext);
    console.log(user);
    return(
        <header
        className='header'
        style={{backgroundColor:isDark?'black':'lightgray',
        color:isDark?'white':'black'}}>
            <h1>Welcome {user}!!</h1>
        </header>
    )
}
export default Header;