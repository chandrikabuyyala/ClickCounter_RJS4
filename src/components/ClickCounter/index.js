// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <spam className="spam">{count} </spam>
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" className="btn" onClick={this.onClickIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
