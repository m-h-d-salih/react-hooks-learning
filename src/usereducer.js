

import { useReducer } from "react";
import Reducer from "./usreducerfunc";



// function Usereducer() {
//     
//     const [state,dispatch]=useReducer(Reducer,{value:0})
//     return(
//         <>
//         <div style={{backgroundColor:state.color}}>{state.value}</div>
//         <button onClick={()=>dispatch('increment')}>increment</button>
//         <button onClick={()=>dispatch('decrement')}>decrement</button>
//         <button onClick={()=>dispatch('red')}>red</button>
//         <button onClick={()=>dispatch('green')}>green</button>

//         </>
//     )
// }
function Usereducer() {
   
    const [state,dispatch]=useReducer(Reducer,{value:0})
    return(
        <>
        <div style={{backgroundColor:state.color}}>{state.value}</div>
        <button onClick={()=>{
            dispatch({type:'change-value',
                payload:1
            });
            

            }}>increment</button>
        <button onClick={()=>{
            dispatch({type:'change-value',
                payload:-1
            });
            

            }}>decrement</button>
        <button onClick={()=>{
            dispatch({type:'change-color',
                color:'red'
            });
            

            }}>red</button>
        <button onClick={()=>{
            dispatch({type:'change-color',
                color:'green'
            });
            

            }}>green</button>

        </>
    )
}
export default Usereducer;