import { useState } from 'react'

const App = () => {
  // useState returns a stateful value, and a function to update it
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    // DO THIS
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)

    // NOT THIS:
    // allClicks.push('L')
    // setAll(allClicks)
    // setLeft(left + 1)
    // ^ This technically would work, but state should never be modified
    //   directly! This can lead to problems that are very hard to debug.
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('right before', right)
    setRight(right + 1)
    console.log('right after', right)
    // Because the update of state is asynchronous,
    // right before and right after are the same value
    // this means the total is wrong, since the old value persists
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App