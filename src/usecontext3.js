import { useContext, useState } from "react";
import { Mycontext } from "./usecontext1";
import { Mycontext1 } from "./usecontext2";

const Usecontext3=()=>{
    const val=useContext(Mycontext);
    let val2=useContext(Mycontext1);
    const [color,setColor]=useState(val2)
    return(
        <>
        <h1 style={{backgroundColor:color}}>context3</h1>
        <button style={{backgroundColor:color}} onClick={()=>setColor(prev=>prev==='red'?'green':'red')}>swicth theme</button>
        <h2>{val}</h2>
        </>
    )
}
export default Usecontext3;