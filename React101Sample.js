import React, { useEffect, useState } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const [greeting, setGreeting] = useState('Go Away!')
  const increment = props.incrementBy

  useEffect(() => {
    setGreeting('Hello!')
  })

  return (
    <div>
      <h1>{count}</h1>
      <p>{greeting}</p>
      <button onClick={() => setCount(count + increment)}>Click me</button>
    </div>
  )
}

export default Counter
