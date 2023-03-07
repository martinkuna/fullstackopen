const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
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