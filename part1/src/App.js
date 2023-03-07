import { useState } from 'react'

/*
 * Let's go over the main principles of how an application works once more.
 *
 * When the application starts, the code in App is executed.
 * This code uses a useState hook to create the application state, setting an
 * initial value of the variable counter. This component contains the Display
 * component - which displays the counter's value, 0 - and three Button
 * components. The buttons all have event handlers, which are used to change
 * the state of the counter.
 * 
 * When one of the buttons is clicked, the event handler is executed.
 * The event handler changes the state of the App component with the
 * setCounter function. Calling a function that changes the state causes the
 * component to rerender.
 *
 * So, if a user clicks the plus button, the button's event handler changes
 * the value of counter to 1, and the App component is rerendered. This causes
 * its subcomponents Display and Button to also be re-rendered. Display
 * receives the new value of the counter, 1, as props. The Button components
 * receive event handlers which can be used to change the state of the counter.
*/

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  )
}

export default App