import { useState } from "react"

const useForm=(initial)=>{
    const[value,setValue]=useState(initial);
    return [value,event=>{
        setValue({
            ...value,
            [event.target.name]:event.target.value,
    })
    }]
}
export default useForm;