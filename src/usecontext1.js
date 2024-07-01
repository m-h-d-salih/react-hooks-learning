import { createContext } from "react";
import Usecontext2 from "./usecontext2";

const Mycontext=createContext();
const Usecontext1=()=>{
    return(
        <>
        <h1>context 1</h1>
        <Mycontext.Provider value='salih'>
        <Usecontext2 />
        </Mycontext.Provider>
        </>
    );
}
export default Usecontext1;
export{
    Mycontext
}