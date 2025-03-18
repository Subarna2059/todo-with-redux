import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './components/Modal'
import { changeModalState } from './actions/modal-action'
import { recepiToShowDetail } from './actions/recepiToShow-action'
import { showRecepiDetails } from './actions/recepiDetails-action'
import { showDataInInputField } from './actions/data-action'
import { remove } from './actions/todo-action'
import { onUpdate } from './actions/onUpdate-action'
import Button from './components/Button'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.todoReducer)
  const modal = useSelector(state => state.modalReducer)
  const showRecepiDetail = useSelector(state => state.recepiDetailsReducer)
  const recepiDetail = useSelector(state => state.recepiToShowReducer)
  function handleRecepiDetail(id) 
  {
    const findData = data.find((item=>{return item.id == id} ))
    dispatch(recepiToShowDetail(findData))
    dispatch(showRecepiDetails())
  }
  function handleEditClick (id) {
    const findData = data.find((item=>{return item.id == id}))
    dispatch(changeModalState())
    dispatch(showDataInInputField(findData))
    dispatch(onUpdate());
  }
  function handleOnDelete(id)
  {
    const filterData = data.filter((item)=>{return item.id != id})
    dispatch(remove(filterData))
  }
  return (
    <>
    { modal ? <Modal />:
      <div className=' h-[100VH] w-[100VW] flex justify-center items-center'>
          <div className='flex  h-[70VH] w-[50VW] '>
            <div className=' border-l-1 border-gray-200 border-r-1 h-[100%] w-[35%]'>
              <div className=' flex justify-between  p-3 border-b-1 border-gray-200'>
                <div> Recipe </div>
                <i onClick={()=>dispatch(changeModalState())} className="bi bi-plus-square"></i>
              </div>
              <div >
                <ul>
                   {
                      data !="" ?
                      data.map((items,index) =>{
                          return <li className='border-b-1 border-gray-200 text-gray-700 p-3' key={index} onClick={()=>handleRecepiDetail(items.id)} > {items.recepiName} </li>
                      })
                      :<div className=' h-[60VH] flex items-center justify-center flex-col'><img className='h-[22VH] w-[12VW] pb-3' src="https://img.freepik.com/premium-vector/clipboard-with-empty-paper-sheet-pen-hand-isolated-white-blue-clip-board-with-white-paper-pen-put-alongside-office-stationery-paperwork-concept-cartoon-flat-vector-illustration_169241-8828.jpg" alt="" /><Button onClick={()=>dispatch(changeModalState())} buttonName={"Add Recepi"}  color={"blue"} /></div>

                   }
                </ul>
              </div>
            </div>
           <div className='w-[75%]'>
           <div className=' flex justify-between p-3  '>
                 { recepiDetail != "" ? <div className='flex border-b-1 border-gray-200 pb-3 justify-between w-[100%] '> <div className=''>{recepiDetail[0].recepiName}</div>
                 <div>
                <i onClick={()=>handleEditClick(recepiDetail[0].id)} className="bi bi-pencil"></i>
                <i onClick={()=>handleOnDelete(recepiDetail[0].id)} className="bi bi-trash pl-3"></i>
                </div>
                </div>: <div> </div>} 
                
              </div>
              <div>
                {
                  showRecepiDetail && recepiDetail !="" ?
                  <div>
                  <ul className='list-disc ml-4'>
                  <div>Ingredients</div>
                  <li className='ml-5 text-gray-700 '>{recepiDetail[0].recepiIng}</li>
                  <div>Direction</div>
                  <li className='ml-5 text-gray-700'>{recepiDetail[0].recepiDesc}</li>
                  </ul>
                  </div>
                  :<div className='h-[60VH] flex items-center justify-center'><img className='h-[22VH] w-[19VW]' src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*nKSANcE0nTsmnFY3w4O1dQ.png" /></div>}
              </div>
           </div>
          </div>
      </div>
    }

    </>
  )
}

export default App
