import React from 'react'

const Tasks = (props) => {

  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={ () => props.removeTask(index) }> 
            x
          </button>
        </li>
      ))}
    </ul>
  )
}

// line 10 wrapping it in anonymous function prevents it firing right away

export default Tasks
