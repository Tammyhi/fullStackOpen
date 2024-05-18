const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <Part entry={props.array[0]}/>
      <Part entry={props.array[1]}/>
      <Part entry={props.array[2]}/> 
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.array[0].numE + props.array[1].numE+ props.array[2].numE}</p>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.entry.partT} {props.entry.numE}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {partT: 'Fundamentals of React', numE: 10},
    {partT: 'Using props to pass data', numE: 7},
    {partT: 'State of a component', numE: 14},
  ]
  return (
    <>
      <Header course={course}/> 
      <Content array={parts}/>
      <Total array={parts}/>
    </>
  )
}

export default App