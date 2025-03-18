export function recepiDetailsReducer (state=false, action)
{
    switch(action.type) {
        case("showRecepiDetail"):
            return !state
        default:
            return state
    }
}