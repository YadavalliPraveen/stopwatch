import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, time: 0})
  }

  stopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="image-container">
            <img
              className="image"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <h1 className="timer-text">Timer</h1>
          </div>
          <h1 className="countdown">{time}</h1>
          <div>
            <button
              onClick={this.startTimer}
              disabled={isTimerRunning}
              className="start-button"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              className="stop-button"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              className="reset-button"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
