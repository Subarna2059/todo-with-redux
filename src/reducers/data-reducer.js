const initialState = {
        id:"",
        recepiName:"",
        recepiIng:"",
        recepiDesc:"",
}
export function dataReducer (
    state=initialState,
    action) 
{
    switch(action.type) {
        case("insertTypedData"):
            return {
                ...state,
                id:(action.payload.id + 1).toString(),
                [action.payload.field] :  action.payload.value,
            }
        case("clear"):
            return {...initialState}
        case("showDataInInputField"):
            return {
                ...state,
                id:action.payload.id,
                recepiIng:action.payload.recepiIng,
                recepiDesc:action.payload.recepiDesc,
                recepiName:action.payload.recepiName,
            }
        default:
            return state;
    }
}