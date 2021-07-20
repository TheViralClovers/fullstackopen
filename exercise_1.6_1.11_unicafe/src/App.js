import React, { useState } from 'react'

const Button = ({text,handleClick}) => {
  return (
  <button onClick = {handleClick}>
    {text}
    </button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)  
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const Statistics = ({text,value}) => {
    if(text === "positive") {
      return (
        <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
      )
    }

    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
if (good+bad+neutral) {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <table>
      <Statistics text="good" value = {good}/>
      <Statistics text="neutral" value = {neutral}/>
      <Statistics text="bad" value = {bad}/>
      <Statistics text="all" value = {good+bad+neutral}/>
      <Statistics text="average" value = {(good-bad)/(good+neutral+bad)}/>
      <Statistics text="positive" value = {(good/(good+neutral+bad))*100}/>
      </table>
    </div>
  )} 
    return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <p>No feedback provided</p>
    </div>
    )
}



export default App