const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/martinkuna'>mk</a>
    </div>
  )
}

const App = () => {
  const name = 'Martin'
  const age = 30

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Austin' age={10+15} />
      <Hello name={name} age={age} />
      <Footer/>
    </div>
  )
}

export default App