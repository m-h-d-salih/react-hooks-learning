// import { useState } from "react"
import useColor from './custom hooks';

const Importhooks=()=>{
    const [color,setColor]=useColor('red');
    return(
        <>
        <div style={{backgroundColor:color}} onClick={()=>setColor(color=>color==='red'?'black':'red')}>hello</div>
        </>
    )
}
export default Importhooks;