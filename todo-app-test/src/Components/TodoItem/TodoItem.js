import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import './TodoItem.css'
const TodoItem = (props) => {
    const { isCheckTodoList} = useContext(AppContext)
    const {title, id, isChecked} = props
   
    const isStyleTitle = isChecked ? "title-todo check-todo " : "title-todo"
    const isStyleCard = isChecked ? "todo-item check-card" : "todo-item"

    return <div className={isStyleCard}>
        <div className='todo-item-title'>
            <input  type='checkbox' checked={isChecked} id={id} onChange={()=>isCheckTodoList(id)} />
            <p  className={isStyleTitle}>{title}</p>   
        </div>

    </div>
}

export default TodoItem