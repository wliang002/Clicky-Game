import React, { Component } from 'react'
import Card from './Card'
import { Consumer } from '../context'
import Wrapper from './Wrapper'
import Header from './Header'
import Instruction from './Instruction'
import Footer from './Footer'
class Cards extends Component {
  render () {
    return (
      <Consumer>
        { value => {
          const { images, score, highScore, title } = value
          return (
            <div>
              <Header score={score} topScore={highScore} title={title} />
              <Instruction />
              <div className='container'>
                <Wrapper>

                  { images.map(image => (
                    <Card
                      key={image.id}
                      image={image}
                    />
                  ))
                  }

                </Wrapper>
              </div>
              <Footer />
            </div>

          )
        }}

      </Consumer>
    )
  }
}

export default Cards
