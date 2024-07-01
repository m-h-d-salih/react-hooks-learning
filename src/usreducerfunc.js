// function Reducer(state,action) {
// switch(action){
//     case 'increment':return {...state,value:state.value+1};
//     case 'decrement':return {...state,value:state.value-1};   
//     case 'red':return {...state,color:'red'};
//     case 'green':return {...state,color:'green'};
//     default:break;
// }
 
    
// }

function Reducer(state,action) {
    switch(action.type){
        case 'change-value':return {
            ...state,
            value:state.value+action.payload
        }
        case 'change-color':return {
            ...state,
            color:action.color
        }
        default:break;
    }
     
        
    }
export default Reducer