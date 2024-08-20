import { useMemo, useState } from "react"

const Usememoparent=()=>{
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const isEven= useMemo(()=>{
        let i=0;
        while(i<2000000000)i++;
        return count1 %2===0;
    },[count1])
    // const isEven=()=>{
    // let i=0;
    // while(i<2000000000)i++;
    // return count1 %2===0;
    // }

    return(
        <>
        <button onClick={()=>setCount1(count1+1)}>click :{count1}</button><br/>
        <span>{isEven?"EVEN":'ODD'}</span><br/>
        <button onClick={()=>setCount2(count2+1)}>click :{count2}</button>
        </>
    )
}
export default Usememoparent;