import React, { Component } from 'react'


class Header extends Component {

  render () {
    const { score, topScore, title } = this.props

    return (
      <header className='header mb-3' style={{ backgroundColor: '#5133A4', zIndex: 1, position: 'fixed', width:'100%',
      color: 'white', height: '85px', padding: '2em' }}>
        <nav className='nav nav-pills nav-fill'>
          <a style={{ color: 'white', textDecoration: 'none' }} className='nav-item' href='/'><h3>Clicky Game</h3></a>
          <h3 className='nav-item'>{title}</h3>
          <h3 className='nav-item'>Score: {score} | TopScore: {topScore}</h3>
        </nav>
      </header>
      
    )
  }
}

export default Header
