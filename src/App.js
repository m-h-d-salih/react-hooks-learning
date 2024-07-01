
import { useState } from 'react';
import './App.css';
import Some from './props';

function App() {
  
  
  const [flag,setFlag]=useState(false);
  const [color,setColor]=useState('white');
 return(
  <>
  <div className='div' style={{backgroundColor:color}}>
    <div className='item'>
  <button onClick={()=>{
   setColor(flag?'white':'black')
   setFlag(!flag)
   
    
  }} >Switch theme</button>
    <Some name='salih' />
  </div>
  </div>
  </>
 )
}

export default App;
