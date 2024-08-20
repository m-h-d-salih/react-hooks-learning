import useForm from "./usefunction1";


 const Custom1=()=>{
    const [value,handleValue]=useForm({
        name:'',
        email:''
    });
    return(
        <>
        <input type='text' name='name' onChange={handleValue}/>
        <input type='text' name='email' onChange={handleValue}/>
        <div id='div1'>{value.name}</div>
        <div id='div1'>{value.email}</div>
        </>
    )
}
export default Custom1;