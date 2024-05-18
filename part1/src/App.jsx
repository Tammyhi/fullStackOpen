const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, who is {props.age} old</p>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
export default App