import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src="img" alt="" />
      <button style={{backgroundColor:"red"}}></button>

      
    </div>
  )
}

export default Card