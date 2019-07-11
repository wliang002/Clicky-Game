import React from 'react'
import './footer.css'
import react from '../images/react.png'

export default function Footer () {
  return (
    <div>
      <footer className='footer'>
          <div className='bottom'>
              Clicky Game!
              <img src={react} style={{ width: '25px', height: '25px'}}></img>
          </div>
      </footer>
    </div>
  )
}
