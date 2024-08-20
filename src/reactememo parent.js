import { useState } from "react";
import useColor from "./custom hooks";
import MemoChild from "./react memo  child";

const Parent=()=>{
    console.log('parent rendering');
    const [color,setColor]=useColor('red');
    const [name,setName]=useState('salih');
    return(
        <>
        <h1>parent</h1>
        <button style={{backgroundColor:color}} onClick={()=>setColor(color=>color==='red'?'black':'red')}> click me</button>
        <button onClick={()=>setName('nidha')}> click me</button>
        <MemoChild name={name}/>
        </>
    )
}
export default Parent;