import React from 'react'
import './App.css';


const Child3 = ({setdisplay,display,obj}) => {
  return (
    <div>
       <div className='child c' onClick={()=>setdisplay(!display)} ><h1>{display ?obj.age:obj.name}</h1></div>

    </div>
  )
}

export default Child3
