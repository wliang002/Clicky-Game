import React, { Component } from 'react'
import { Consumer } from '../context'
import './card.css'


class Card extends Component {

  onImgClick = (id, dispatch) => {
    dispatch({
      type: 'CLICK',
      payload: id
    })
  
  }

  
  render () {
    const { id, name } = this.props.image

    return (
      <Consumer>
        { value => {
          const { dispatch } = value
      
          return(
            <div className='box'>
              <div className='card'>
                <div className='imgbx'>
                    <img src={require(`../images/${name}.jpg`)} 
                    onClick={ this.onImgClick.bind(this, id, dispatch) }
                    style={{ cursor:'pointer'}}/>
                </div>
              </div> 
            </div>
          )
        }}
      </Consumer>
        
    )
  }
}

export default Card
