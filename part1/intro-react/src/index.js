import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

const Description = () => {
  return (
    <div>
      <p>Esta es la App del Curso Full Stack Open Bootcamp</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Bootcamp Full Stack Open</h1>
      <Message message='Estamos trabajando' color='purple' />
      <Message message='En un curso' color='blue'/>
      <Message message="De react" color='green' />
      <Description />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))