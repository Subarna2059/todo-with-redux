
export function fillInformation (field,value, id) 
{
    return {
        type:"insertTypedData",
        payload:{field,value, id}
    }
}
export function clearData() 
{
    return {
        type:"clear"
    }
}
export function showRecepiDetails()
{
    return {
        type:"showRecepiDetails"
    }
}
export function showDataInInputField (payload) 
{
    return {
        type:"showDataInInputField",
        payload
    }
}