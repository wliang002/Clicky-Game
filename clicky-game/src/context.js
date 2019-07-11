import React, { Component } from 'react'

const Context = React.createContext()

const shuffle = (array) => {
    let currInd = array.length, tempVal, randomInd
    while (0 !== currInd) {
        randomInd = Math.floor(Math.random() * 12)
        currInd -= 1
        tempVal = array[currInd]
        array[currInd] = array[randomInd]
        array[randomInd] = tempVal
    }
    return array
}


const reducer = (state, action) => {

    let imgClicked = state.images.filter(image => image.id === action.payload)[0]
    let newTitle = state.title
    let newScore = state.score
    let newHighScore = state.highScore
    let newImages = state.images

    //console.log(newImages)

    if (imgClicked.clicked) {
        newTitle = 'You guessed incorrectly!'
        if (newScore > newHighScore) {
            newHighScore = newScore
        }
        newScore = 0
        const recovery = state.images.map(newImg => {
            const container = {}
            container['id'] = newImg.id
            container['name'] = newImg.name
            container['clicked'] =  false
            return container
        })
        newImages = recovery
    } else {
        newTitle = 'You guessed correctly!'
        newScore = state.score + 1
        if (newScore > newHighScore) {
            newHighScore = newScore
        } else {
            newHighScore = state.highScore
        }
        let i = state.images.indexOf(imgClicked)
        let newImage = {id: imgClicked.id,
                    name: imgClicked.name,
                    clicked: !imgClicked.clicked}
        newImages[i] = newImage
    }

    

    let reorderedImages = shuffle(newImages)

    switch(action.type) {
        case 'CLICK':          
            return {
                ...state,
                images: reorderedImages,
                score: newScore,
                highScore: newHighScore,
                title: newTitle
            }
        default:
            return state
    }
}

export class Provider extends Component {
    state = {
        images: [
            {
                id: 1,
                name:'cat',
                clicked: false
            },
            {
                id: 2,
                name:'cat2',
                clicked: false
            },
            {
                id: 3,
                name:'cat3',
                clicked: false
            },
            {
                id: 4,
                name:'cat4',
                clicked: false
            },
            {
                id: 5,
                name:'cat5',
                clicked: false
            },
            {
                id: 6,
                name:'cat6',
                clicked: false
            },
            {
                id: 7,
                name:'cat7',
                clicked: false
            },
            {
                id: 8,
                name:'cat8',
                clicked: false
            },
            {
                id: 9,
                name:'cat9',
                clicked: false
            },
            {
                id: 10,
                name:'cat10',
                clicked: false
            },
            {
                id: 11,
                name:'cat11',
                clicked: false
            },
            {
                id: 12,
                name:'cat12',
                clicked: false
            }
           
        ],
        score: 0,
        highScore:0,
        title: 'Click an image to begin!',

        dispatch: action => this.setState(state => 
          reducer(state, action))
        

      }
  
      render() {
          return(
              <Context.Provider value={ this.state }>
                  { this.props.children }
              </Context.Provider>

          )
      }
}

export const Consumer = Context.Consumer 