const Header = (props) => {
  return (
    <>
      <h1>{props.array.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part entry={props.array.parts[0]} />
      <Part entry={props.array.parts[1]} />
      <Part entry={props.array.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.array.parts[0].exercises + props.array.parts[1].exercises + props.array.parts[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.entry.name} {props.entry.exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
return (
  <>
    <Header array={course} />
    <Content array={course} />
    <Total array={course} />
  </>
)
}

export default App