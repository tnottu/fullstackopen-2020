import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
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
        ? <>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {all}</div>
          <div>average {average}</div>
          <div>positive {positive} %</div>
        </>
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