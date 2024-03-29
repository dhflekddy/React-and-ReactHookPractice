import React from 'react';
const Child=({childAge, childName})=>{
    console.log("자녀 컴포넌트도 랜더링이 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding:'10px'}}>
            <h3>자녀</h3>
            <p>name: {childName}</p>
            <p>age:{childAge}살</p>
        </div>
    );
};
export default Child;