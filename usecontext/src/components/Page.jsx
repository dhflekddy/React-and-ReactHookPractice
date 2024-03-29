import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const Page=({isDark, setIsDark})=>{
    return(
        <div className="page">
            <Header isDark={isDark}></Header>
            <Content isDark={isDark}></Content>
            <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
        </div>
    );
};
export default Page;