// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    iputPharse: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({iputPharse: value})
  }

  render() {
    const {iputPharse} = this.state

    return (
      <div className="app-container">
        <div className="letter-calculator-container">
          <div className="calculator-container">
            <h1 className="heading"> Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="inputText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="inputText"
                placeholder="Enter the phrase"
                className="input-element"
                value={iputPharse}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letter-count">No.of letters: {iputPharse.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letter-calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
