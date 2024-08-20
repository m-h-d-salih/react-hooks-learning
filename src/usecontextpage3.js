import { useContext } from "react"
import { Newcontext } from "./usecontext page1"

const UseContextpage3=()=>{
    const val=useContext(Newcontext)
    return(
        <>
        <h1>3</h1>
        <h1>{val}</h1>
        </>
    )
}
export default UseContextpage3