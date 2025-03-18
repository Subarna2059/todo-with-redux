export function onUpdateReducer(state = false, action)
{
    switch(action.type) {
        case ("onUpdate"):
            return state = !state
        default:
            return state
    }
}