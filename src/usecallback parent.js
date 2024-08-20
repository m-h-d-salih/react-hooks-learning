import { useCallback, useState } from "react";

import ChilduseCallback from "./usecallback child";


const Parentusecallback=()=>{
    console.log('parent rendering');
  
    const [state,setState]=useState(0);
    const handleclick=useCallback(()=>{},[])
    
    return(
        <>
        <h1>parent</h1>
        <button onClick={()=>setState(prevstate=>prevstate+1)}> click me</button>{state}
        <ChilduseCallback handleclick={handleclick}/>
        </>
    )
}
export default Parentusecallback;