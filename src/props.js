const Some=(props)=>{

    return(
        <>
        <h1>{props.name}</h1>
        <input onChange={(e)=>console.log(e.target.value)} type='text'/>
        </>
    )
}
export default Some;