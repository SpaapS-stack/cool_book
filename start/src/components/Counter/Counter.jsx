import React from 'react'
import { useCounter } from '../../hooks/counterHook'

export default function Counter() {
    const [cash, addAct, minusAct] = useCounter();
    
  return (
    <div>
        <h1>{cash}</h1>
        <button onClick={minusAct}>-</button>
        <button onClick={addAct}>+</button>
    </div>
  )
}
