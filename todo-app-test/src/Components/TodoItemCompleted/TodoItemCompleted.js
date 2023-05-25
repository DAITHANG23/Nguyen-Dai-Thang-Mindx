import React,{useState, useRef, useEffect, useContext} from 'react'
import {FaTrashAlt, FaEdit} from "react-icons/fa"
import AppContext from '../../Context/AppContext';
import './TodoItemCompleted.css'
const TodoItemCompleted = (props) => {
    const { title, id, isChecked} = props;
    const {onRemoveTodoList, isCheckTodoList, onUpdateTitle} = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingValue, setIsEditingValue] = useState(title);
    const todoInputRef = useRef(null)
   
    const isStyleTitle = isChecked ? "title-todo check-todo " : "title-todo"
    const isStyleCard = isChecked ? "todo-item check-card" : "todo-item"

    const onEditing = () =>{
        setIsEditing(true);  
    }

    const onChangeTitle = (e) =>{
        setIsEditingValue(e.target.value) 
    }

    const onUpdateTitleHandle = () => {
        onUpdateTitle(isEditingValue, id)
        setIsEditing(false)
    }

    const onKeyDownHandler = (e) =>{
        if(e.key === 'Enter'){
            onUpdateTitleHandle();
        }
        if(e.key === 'Escape'){
            setIsEditingValue(title)
        }
    }

    useEffect(() => {
        if (isEditing && todoInputRef) {
          todoInputRef && todoInputRef.current.focus();
        }
      }, [isEditing]);

    return <div className={isStyleCard}>
        <div className='todo-item-title'>
            <input  type='checkbox' checked={isChecked} id={id} onChange={()=>isCheckTodoList(id)} />
            {
                isEditing?(
                    <input 
                    value={isEditingValue}
                    name={title}
                    onChange={onChangeTitle}
                    onBlur={onUpdateTitleHandle}
                    onKeyDown={onKeyDownHandler}
                    ref={todoInputRef}
                    />
                ): (<p  className={isStyleTitle}
                >{title}</p>)
            }
            
        </div>
        <div className='todo-func'>
            <FaEdit
            className='btn-edit'
                onClick={onEditing}
                style={{
                    color: "rgb(54, 231, 54)",
                    fontSize:"30px",
                    cursor: "pointer",
                    marginRight:"20px",
                   paddingTop:"5px"
                }} />

            <button onClick={()=> onRemoveTodoList (id)} className='btn-item-remove' style={{border:"none",background:"none", fontSize:"20px",  cursor: "pointer", }}><FaTrashAlt /></button>
        </div>

    </div>
}

export default TodoItemCompleted