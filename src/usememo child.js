import { memo } from "react";

const Childmemo=()=>{
    console.log('child rendered');
    return(
        <>
       <h1>hiii</h1>
        </>
    )
}
export default memo(Childmemo);