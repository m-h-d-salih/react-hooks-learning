import { useMemo, useState } from "react";
import Childmemo from "./usememo child";



const Parentmemo=()=>{
    console.log('parent rendered');
    const[state,setState]=useState(0)
    const arr=useMemo(()=>{
        return [1,2,3];
    },[])
// const arr=[1,2,3];
    return(
        <>
        <h1>salih</h1>
        <button onClick={()=>setState(state+1)}> increment</button>
        <h4>{state}</h4>
        <Childmemo arr={arr}/>
        </>
    )
}
export default Parentmemo;