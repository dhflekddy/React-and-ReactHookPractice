import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//Page컴포넌트에는 더이상 props가 하나도 필요없으니 모두 삭제해 준다.
const Page=()=>{
    return(
        <div className="page">
            <Header ></Header>
            <Content ></Content>
            <Footer ></Footer>
        </div>
    );
};
export default Page;