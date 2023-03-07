import { useState } from 'react'

const App = () => {
  // use an object (clicks) to store application state,
  // the initial state is an object with two properties
  // left and right, both default to zero
  // setClicks is the set function, which will update the
  // state object (clicks) and rerender the app
  //
  // remember: useState returns an array with exactly two values:
  //           1. The current state. During the first render, it will match the
  //                                 initialState you have passed into useState()
  //           2. The set function, which lets you update the state to a different value
  //                                and trigger a re-render of the component
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // event handler for the left button
  // creates a new object called newClicks, which is
  // then passed into setClicks, which becomes the new state of the application
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

  // right click event handler
  // using object spread syntax
  // { ...clicks } creates a new object that copies all of the values of the
  // clicks object, and when we specify a specific property, such as right:
  // the value of the property in the new object (newClicks) will be what
  // we set it (in this case, the old objects clicks.right plus 1)
  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

export default App