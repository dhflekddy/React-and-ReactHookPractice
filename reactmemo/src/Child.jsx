import React,{memo} from 'react';
const Child=({childName})=>{
    console.log("자녀 컴포넌트도 랜더링이 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding:'10px'}}>
            <h3>자녀</h3>
            <p>성: {childName.lastName}</p>
            <p>이름:{childName.firstName}</p>
        </div>
    );
};
export default memo(Child);