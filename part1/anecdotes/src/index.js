import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomIntInclusive(min, max) {
  const minRounded = Math.ceil(min)
  const maxRounded = Math.floor(max)
  return Math.floor(Math.random() * (maxRounded - minRounded + 1) + minRounded)
}

function getRandomArrayIndex(array) {
  return getRandomIntInclusive(0, array.length - 1)
}

const MostVotes = ({ anecdotes, points }) => {

  const highestPointsCount = Math.max(...points)
  const highestPointsAnecdoteIndex = points.findIndex(pointCount => pointCount === highestPointsCount)

  if (!highestPointsCount) {
    return null
  }

  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[highestPointsAnecdoteIndex]}</div>
      <div>has {highestPointsCount} votes</div>
    </>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(getRandomArrayIndex(anecdotes))
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleNextClick = () => {
    setSelected(getRandomArrayIndex(anecdotes))
  }

  const handleVoteClick = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
