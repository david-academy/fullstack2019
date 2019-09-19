import React from 'react'

const Total = ({course})=>{
    const parts = course.parts
	const exercises = parts.map( part => part.exercises ).reduce( (sum, currentValue) => sum + currentValue )
    return(
       
            <p><b>total of exercises {exercises}</b></p>
      
    )}

    export default Total