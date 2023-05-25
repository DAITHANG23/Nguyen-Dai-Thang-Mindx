
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header';
import { v4 as uuidv4 } from "uuid";
import TodoList from './Pages/TodoList/TodoList';
import TodoActive from './Pages/TodoActive/TodoActive';
import TodoCompleted from './Pages/TodoCompleted/TodoCompleted';
import AppContext from './Context/AppContext'
import { useState , useEffect} from 'react';


function App() {

  const [todoList, setTodoList] = useState(() => {
    const todoListStorage = localStorage.getItem("todoApp");
    return todoListStorage ? JSON.parse(todoListStorage) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("todoApp", JSON.stringify(todoList));
  }, [todoList])

  
  const onAddNewTodo = (todoTitle) => {
    const NewTodoList = {
      title: todoTitle,
      id: uuidv4(),
      isChecked: false
    }

    const nextTodoList = [...todoList, NewTodoList];
    setTodoList(nextTodoList);

  }

  const onRemoveTodoList = (id) => {
    const removeTodoItem = todoList.filter((todoItem) => {
      return todoItem.id !== id;
    })
    setTodoList(removeTodoItem);
  }

  const isCheckTodoList = (todoId) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === todoId;
    })
    const newTodoItem = [...todoList]

    if (newTodoItem[todoIndex].isChecked === false) {
      newTodoItem[todoIndex].isChecked = true;

    } else {
      newTodoItem[todoIndex].isChecked = false;
    }
    setTodoList(newTodoItem)
  }

  const onUpdateTitle = (updateTitle, id) => {
    const todoIndex = todoList.findIndex((itemId) => {
      return itemId.id === id;
    })
    const updateTodoList = [...todoList];
    updateTodoList[todoIndex] = {
      ...updateTodoList[todoIndex],
      title: updateTitle
    }
    setTodoList(updateTodoList)
  }

  return (
    <AppContext.Provider
      value={{
        onAddNewTodo: onAddNewTodo,
        todoList: todoList,
        onRemoveTodoList: onRemoveTodoList,
        isCheckTodoList: isCheckTodoList,
        onUpdateTitle: onUpdateTitle,
        setTodoList:setTodoList
      }}
    >
      <div >
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>#todo</h1>
        <Header />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/active' element={<TodoActive />} />
          <Route path='/completed' element={<TodoCompleted />} />
        </Routes>
      </div>
    </AppContext.Provider>

  );
}

export default App;
