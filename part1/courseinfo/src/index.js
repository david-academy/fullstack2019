import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({text})=> <h1>{text}</h1>

const Part = ({part, exercises})=><p>{part} {exercises}</p>
const Content = (props)=>{
  
    return(
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />  
        </div>
    )}
const Total = (props)=>{
    const reducer = (accumulator, currentValue)=> accumulator+currentValue;
    return(
        <>
            <p>Number of exercises {props.parts.map(part=> part.exercises).reduce(reducer)}</p>
        </>
    )}
const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
          {
      name:'Fundamentals of React',
      exercises: 10
        },
        {
      name:'Using props to pass data',
      exercises: 7
        },
        {
      name:'State of a component',
      exercises:14
        }
      ]
    }
  return (
    <div>
      <Header text={course.name} />
      <Content  parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))