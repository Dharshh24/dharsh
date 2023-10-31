import React,{useState} from 'react'
function Abd(){
    const[counts1,setCounts1]=useState(0);
    function myfun(){
        setCounts1(counts1+1)
    }
    function myfun1(){
        setCounts1(counts1-1)
    }
    return
    (
    <>
        <button onClick={myfun}>Increase</button>
        <span>{counts1}</span>
        <button onClick={myfun1}>Decrese</button>
       </>
        
    )
}
export default Abd