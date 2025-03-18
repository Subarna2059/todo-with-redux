export function  insert (payload) 
{
    return {
        type:"insert",
        payload,
    }
}
export function update (payload)
{

    return {
        type:"update",
        payload
    }
}
export function remove (payload)
{
    
    return {
        type:"remove",
        payload
    }
}


