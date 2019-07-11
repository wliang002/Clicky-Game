import React from 'react'
import './instruction.css'

function Instruction () {
  return (
    <div className='inst'>
      <div className='container'>
        <h1 className='display-4' style={{ fontSize: '80px'}}><strong>Clicky Game!</strong></h1>
        <p className='lead text-left' style={{ fontSize: '30px'}} >Click on a cat to earn points, <br/>but don't click on any more than once!</p>
      </div>
    </div>
  )
}

export default Instruction
