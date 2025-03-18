import React, { useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { clearData, fillInformation } from '../actions/data-action'
import { insert, update } from '../actions/todo-action'
import { changeModalState } from '../actions/modal-action'
import { onUpdate } from '../actions/onUpdate-action'

const Modal = () => {
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modalReducer)
  const data = useSelector(state=>state.dataReducer)
  const arrayData = useSelector(state => state.todoReducer)
  const checkOnUpdate = useSelector(state => state.onUpdateReducer)
  const id = arrayData.length
  function handleOnClick() {
    if (dispatch(insert(data))) {
        dispatch(changeModalState())
        dispatch(clearData())
    }
  }
  function handleOnEdit() 
  {
    const filteredData = arrayData.filter((item)=>{return item.id != data.id})
    filteredData.unshift(data)
    dispatch(update(filteredData))
    dispatch(changeModalState())
    dispatch(onUpdate())
  }

  return (
   <>
   <div className='h-[100VH] w-[100VW] flex justify-center items-center'>
   <div className=' w-[45VW]  h-[65VH] fixed'>
    <div className='border-b-1 border-gray-200  p-4 font-semibold flex justify-between '>
        <div>Add Recipe</div>
        <i onClick={()=>dispatch(changeModalState())}  className="bi bi-x"></i>
    </div>
    <div>
    </div>
    <div>
    <div className='border-b-1 border-gray-200 h-[47VH]'>
    <div className='pl-4 pr-4'>
    <div className='flex flex-col pt-4'>
        <label >Recipe Name</label>
        <input name='recepiName' value={data.recepiName} onChange={(e)=>  checkOnUpdate  ? dispatch(fillInformation(e.target.name, e.target.value, id-1)):dispatch(fillInformation(e.target.name, e.target.value, id))} className='border-1 border-gray-200 focus:border-blue-500 focus:outline-none' type="text" ></input>
    </div>
    <div className='flex pt-4 '>
    <div className='flex flex-col'>
        <label>Recipe Ingredients</label>
        <textarea name="recepiIng"  value={data.recepiIng} onChange={(e)=>  checkOnUpdate  ? dispatch(fillInformation(e.target.name, e.target.value, id-1)):dispatch(fillInformation(e.target.name, e.target.value, id))} rows="8" cols="40" className='border-1 border-gray-200 focus:border-blue-500 focus:outline-none'></textarea>
    </div>
    <div className='flex flex-col ml-4'>
        <label>Recipe Description</label>
        <textarea name='recepiDesc'  value={data.recepiDesc} onChange={(e)=>  checkOnUpdate  ? dispatch(fillInformation(e.target.name, e.target.value, id-1)):dispatch(fillInformation(e.target.name, e.target.value, id))} rows="8" cols="40" className='border-1 border-gray-200 focus:border-blue-500 focus:outline-none'></textarea>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-end items-center pl-4 pr-4  h-[10VH]'>
        <div className='mr-2'>
        <Button buttonName={"cancel"} color={"red"}   />
        </div>
        <div>
        <Button onClick={ checkOnUpdate ? ()=>handleOnEdit() : ()=>handleOnClick()} buttonName={checkOnUpdate ? "Save Changes" :  "Add recipe"} color={"blue"}  />
        </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal