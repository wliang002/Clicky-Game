import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className='nav nav-pills nav-fill'>
        <a className='nav-item' href='/'><h3>Clicky Game</h3></a>
        <h3 className='nav-item'>Click an image to begin!</h3>
        <h3 className='nav-item'>Score: {0} | TopScore: {0}</h3>
      </nav>
    )
  }
}

export default Header
