import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = ({ text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ clicks }) => {

  const { good, neutral, bad } = clicks
  const all = good + neutral + bad;
  let average = 0;
  let positive = 0;

  if (all > 0) {
    average = (good - bad) / (all);
    positive = good / all * 100;
  }

  return (
    <>
      <h1>statistics</h1>
      {all > 0
        ? <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={`${positive} %`} />
          </tbody>
        </table>
        : <p>No feedback given</p>
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clicks = { good, neutral, bad };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics clicks={clicks} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
