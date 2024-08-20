import { useState } from "react";



const Rating=()=>{
   const [color1,setColor1]=useState('red');
   const [color2,setColor2]=useState('red');
   const [color3,setColor3]=useState('red');
   const [color4,setColor4]=useState('red');
    
 return(
    <div style={{display:'flex'}}>
    
    <div onClick={()=>{setColor1('black');setColor2('red');setColor3('red');setColor4('red')}} style={{width:'20px',height:'20px',background:color1,marginLeft:'40px'}}></div>
    <div onClick={()=>{setColor1('black');setColor2('black');setColor3('red');setColor4('red')}} style={{width:'20px',height:'20px',border:'black',background:color2,marginLeft:'40px'}}></div>
    <div onClick={()=>{setColor1('black');setColor2('black');setColor3('black');setColor4('red')}} style={{width:'20px',height:'20px',border:'black',background:color3,marginLeft:'40px'}}></div>
    <div onClick={()=>{setColor1('black');setColor2('black');setColor3('black');setColor4('black')}} style={{width:'20px',height:'20px',border:'black',background:color4,marginLeft:'40px'}}></div>
    </div>
 )

}
export default Rating;