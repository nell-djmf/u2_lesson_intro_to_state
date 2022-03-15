import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {

  const [chores, manageChores] = useState([
    'Take the dogs on a walk',
    'Make dinner',
    'Review lessons',
    'Do laundry'
  ])

  const[newChore, changeChore] = useState('')

  const addChore = () => {
    let myNewList = [...chores, newChore] //making a copy of the values in the chores array
    manageChores(myNewList) //will change the state of chores array
  }
  
  const handleChange = (event) => {
    changeChore(event.currentTarget.value)
  }

  const removeChore = (index) => {
    let choreList = [...chores]
    choreList.splice(index, 1)
    manageChores(choreList)
  }

  return (
    <div className="list">
      <Input handleChange={ handleChange } addTask={ addChore }/>
      <Tasks tasks={ chores } removeTask={ removeChore }/>
    </div>
  )
}

export default TodoList