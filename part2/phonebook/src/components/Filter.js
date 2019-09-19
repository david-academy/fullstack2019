import React from 'react'
const Filter = ({value, changeEvent})=>{
    return (
      <div>
        filter shown with 
        <input
            value={value}
            onChange={changeEvent}
            />
      </div>
    )
  }
  export default Filter