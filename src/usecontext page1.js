import { createContext } from "react";
import UseContextpage2 from "./usecontextpage2"

const Newcontext=createContext()
const UseContextpage1=()=>{

    return(
        <>
        <h1>1</h1>
        <Newcontext.Provider value='salih'>
        <UseContextpage2/>
        </Newcontext.Provider>
        </>
    )
}
export default UseContextpage1;
export {
    Newcontext
}