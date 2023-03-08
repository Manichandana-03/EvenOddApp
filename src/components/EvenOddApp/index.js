// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    //  const {displayEvenOdd} = this.state
    const randNum = Math.floor(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randNum}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {value}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
