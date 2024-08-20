// import useColor from "./custom hooks";

import React from "react";



// import axios from "axios";
const Child=({name})=>{
    console.log('child rendering');
    //axios 
    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://reqres.in/api/users');
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    //   fetchData(); 
    // const [color,setColor]=useColor();
    return(
        <>
        <h1>{name}</h1>
        {/* <button style={{backgroundColor:color}} onClick={()=>setColor(color=>color==='red'?'black':'red')}> click me</button> */}
       
        </>
    )
}


export default React.memo(Child)