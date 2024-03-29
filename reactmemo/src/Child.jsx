import React,{memo} from 'react';
const Child=({childName, tellMe})=>{
    console.log("자녀 컴포넌트도 랜더링이 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding:'10px'}}>
            <h3>자녀</h3>
            <p>이름:{childName}</p>
            <button onClick={tellMe}>엄마 나 사랑해?</button>
        </div>
    );
};
export default memo(Child);