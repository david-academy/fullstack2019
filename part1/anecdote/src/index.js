import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text})=> <h1>{text}</h1>
const Button = ({onClick, text})=>(<button onClick={onClick}>{text}</button>)
const Votes = ({points, selected})=>(<p>has {points[selected]} votes</p>)
const voting = (points, selected)=>{
    const copy = [...points]
    copy[selected]+=1
    return copy
 }

 const MostVoted = ({points, selected, anecdotes})=>{
    const mostVotedAnecdote = anecdotes[points.indexOf(Math.max(...points))]
    return (
    <>
    <p>{mostVotedAnecdote}</p>
    <p>has {points[points.indexOf(Math.max(...points))]} votes</p>
    </>
    )}
const randIndex = arr => Math.floor(Math.random()*arr.length)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints]= useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
        <Header text="Anecdote of the day"/>
        {anecdotes[selected]}
        <br/>
        <Votes points={points} selected={selected}/>
        <Button 
            text="vote"
            onClick={()=>setPoints(voting(points, selected))}/>
        <Button 
            text="next anecdote"
            onClick={()=>setSelected(randIndex(anecdotes))}/>
        <Header text="Anecdote with most votes"/>
        <MostVoted points={points} anecdotes={anecdotes}/>   
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