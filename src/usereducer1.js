import { useReducer } from "react"
import Reducer from "./usereducerfn1";


const Usereducer1=()=>{
    // const[count,setCount]=useState(0);
    const[state,dispatch]=useReducer(Reducer,{color:'red',value:0});
    
    return(
        <>
        <button onClick={()=>dispatch({type:'change-value',payload:1})}>increment</button>
        {state.value}
        <button onClick={()=>dispatch({type:'change-value',payload:-1})}>Decrement</button>
``
        
        <button style={{background:state.color}} onClick={()=>dispatch({type:'change-color',payload:state.color==='red'?'green':'red'})}>switch</button>
        </>
    )
}
export default Usereducer1;