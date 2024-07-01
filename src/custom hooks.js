import { useState } from "react";

const useColor=()=>{
    const [color,setColor]=useState('red');
    return [color,setColor];
}
export default useColor;