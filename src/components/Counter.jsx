import React, {useState} from 'react'

export const Counter=() => {
    const [counter, setCount] = useState(0)
  return (
    <div>Counter
        <i class="fa-solid fa-plus fa-3x test-danger"></i>
        <div>A számláló értéke: {counter}</div>
        <i class="fa-solid fa-minus fa-3 test-success"></i>
    </div>
  )
}
