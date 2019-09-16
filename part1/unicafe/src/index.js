import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text})=> <h1>{text}</h1>
const Button = ({onClick, text})=>(<button onClick={onClick}>{text}</button>)
const Statistic = ({text, value}) =>(    
        <tr>
            <td>{text}</td>
            <td>{String(value)}</td>
        </tr>
    )
    const Statistics=({good, bad, neutral})=>{
        return good + bad + neutral > 0 ? (    
        <table>
            <tbody>
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral}/>
            <Statistic text='bad' value={bad}/>
            <Statistic text='all' value={bad+good+neutral}/>
            <Statistic text='average' value={mean(good - bad, good + neutral + bad)}/>
            <Statistic text='positive' value={positive(good + bad, good + neutral + bad)}/>
            </tbody>
        </table>
        ):(
            'No feedback yet'
        )}
const mean = (sum, n)=> sum/n
const positive = (positives, n)=> (positives/n)*100+'%'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
        <Header text="give feedback"/>
        <Button 
            onClick={()=> setGood(good+1)}
            text='good'
            />
         <Button 
            onClick={()=> setNeutral(neutral+1)}
            text='neutral'
            />
         <Button 
            onClick={()=> setBad(bad+1)}
            text='bad'
            />
        <Header text="statistics"/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)