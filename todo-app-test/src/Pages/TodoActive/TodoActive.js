import React, { useContext } from 'react'
import TodoItem from '../../Components/TodoItem/TodoItem';
import TodoForm from '../../Components/TodoForm/TodoForm';
import AppContext from '../../Context/AppContext';
const TodoActive = () => {
    const {todoList} = useContext(AppContext)
    const todoActive = todoList.filter(todoItem => !todoItem.isChecked)
    const todoListValid = todoActive && Array.isArray(todoActive);
    
    const todoListElement = todoListValid && todoActive.map((todoItem) => {
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

export default TodoActive