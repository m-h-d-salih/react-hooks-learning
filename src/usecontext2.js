import { createContext } from "react";
import Usecontext3 from "./usecontext3";
const Mycontext1=createContext();
const Usecontext2=()=>{
    return(
        <>
        <h1>context2</h1>
        <Mycontext1.Provider value='red'>
        <Usecontext3/>
        </Mycontext1.Provider>
        </>
    )
}
export default Usecontext2;
export{
    Mycontext1
}