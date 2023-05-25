import React, { useContext } from 'react'
import TodoItemCompleted from '../../Components/TodoItemCompleted/TodoItemCompleted'
import AppContext from '../../Context/AppContext'
import './TodoCompleted.css'
import {FaTrashAlt} from "react-icons/fa"

const TodoCompleted = () => {
    const {todoList, onRemoveTodoList, isCheckTodoList, onUpdateTitle, setTodoList} = useContext(AppContext)

   const todoCompleted = todoList.filter(todoItem => todoItem.isChecked)
    const todoListValid = todoCompleted && Array.isArray(todoCompleted);

    const onDeleteAll = () => {
        const todoCompletedRemove = todoList.filter(todoItem => !todoItem.isChecked);
        setTodoList(todoCompletedRemove)
      }

    const todoListElement = todoListValid && todoCompleted.map((todoItem) =>{
       
        return <div key={todoItem.id}>
            <TodoItemCompleted {...todoItem} onRemoveTodoList={onRemoveTodoList} isCheckTodoList={isCheckTodoList} onUpdateTitle={onUpdateTitle} />
        </div>
    })

    return <div>
        {todoListElement}
        <button onClick={()=>onDeleteAll()} className='btn-delete'><FaTrashAlt /> Delete All</button>
    </div>  
}

export default TodoCompleted