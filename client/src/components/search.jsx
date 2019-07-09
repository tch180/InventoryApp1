import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(items => (
    <div key={items.id}>
     <h6>{items.name}</h6> 
    </div>
  ))
  return <ul>{options}</ul>
}

export default Suggestions