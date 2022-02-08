//Destructuring assignment
const Part = ({part, exercises})  => <p>{part} {exercises} </p>

const Content = (props) => {
  // 1 - 
  const part1 = props.parts[0]
  const part2 = props.parts[1]
  const part3 = props.parts[2]
    return (
        <div>
          <Part part= {part1.name} exercises= {part1.exercises} />
          <Part part= {part2.name} exercises= {part2.exercises} />
          <Part part= {part3.name} exercises= {part3.exercises} />
        </div>
    )
}

export default Content