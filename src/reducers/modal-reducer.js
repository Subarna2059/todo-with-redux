export function modalReducer (state=false, action)
{
    switch(action.type){
        case("changeModalState"):
            return !state
        default:
            return state
    }
}