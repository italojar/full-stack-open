//Destructuring assignment
const Part = ({part, exercise})  => <p>{part} {exercise} </p>

const Content = (props) => {
    console.log(props)
    return (
        <div>
          <Part part={props.part1} exercise={props.exercise1} />
          <Part part={props.part2} exercise={props.exercise2} />
          <Part part={props.part3} exercise={props.exercise3} />
        </div>
      )
}

export default Content