import React from 'react'

const Button = ({buttonName, color, onClick}) => {
  return (
    <button onClick={onClick} className={`p-1 pl-4 pr-4 border bg-${color}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>{buttonName}</button>
  )
}

export default Button