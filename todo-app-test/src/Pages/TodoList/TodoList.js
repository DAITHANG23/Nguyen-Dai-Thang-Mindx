import React, { useContext } from 'react'
import TodoItem from '../../Components/TodoItem/TodoItem'
import TodoForm from '../../Components/TodoForm/TodoForm'
import AppContext from '../../Context/AppContext'

const TodoList = () => {
    const { todoList} = useContext(AppContext)

    const todoListValid = todoList && Array.isArray(todoList);

    const todoListElement = todoListValid && todoList.map((todoItem) => {
        return <div key={todoItem.id}>
            <TodoItem {...todoItem} />
        </div>
    })
    return (
        <div>
            <TodoForm />
            {todoListElement}
        </div>
    )
}

export default TodoList