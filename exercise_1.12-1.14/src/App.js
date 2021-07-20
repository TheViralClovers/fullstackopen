import React, { useState } from 'react'

const voteCount = [0,0,0,0,0,0,0,0]
const copy = [...voteCount]

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  
  const handleVote = () => {
    copy[selected] += 1
    setVote(copy[selected])
  }

  const Header = ({text}) => <h1>{text}</h1>

  const Display = ({index}) => <p>{anecdotes[index]}</p>

  const Button = ({handleClick,text}) => <button onClick = {handleClick}>{text}</button>
  
  let maxVote = Math.max(...copy)
  let maxVoteIndex = copy.indexOf(maxVote)

  console.log(`max value is ${maxVote}`)
  const handleNext = () => setSelected(Math.floor(Math.random() * 7))
  console.log(copy)
  console.log(copy[selected])
  return (
    <div>
      <Header text="Anectode of the day"/>
      <Display index = {selected}/>
      <p>has {copy[selected]} votes</p>
      <Button handleClick = {handleVote} text = "vote"/>
      <Button handleClick = {handleNext} text = "next anectode"/>
      <Header text="Anectode with the most votes"/>
      <Display index = {maxVoteIndex}/>
    </div>
  )
}

export default App