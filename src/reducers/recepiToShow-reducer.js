export function recepiToShowReducer (state=[],action) 
{
    switch(action.type) {
        case("recepiToShowDetail"):
        if(state.length === 0) {
            return [action.payload]
        } else if(state.length !== 0 && !state.some(item=>{return item.recepiName == action.payload.recepiName})) {
            return [action.payload]
        } else {
            return state
        }
        default:
            return state
    }
}