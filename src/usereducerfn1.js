function Reducer(state,action)
{
    switch(action.type){
        case 'change-value':return {
            ...state,
            value:state.value+action.payload
        }
        case 'change-color':return{
            ...state,
    color:state.payload
        }
        default:return;
    }
}
export default Reducer;