import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import List from "./components/List";


const App = () => {
    const [todos, setTodos]= useState([])
    const [name, setName]= useState("Gilad")

    function fillTodoList(todo, setTodo) {
      // const todoList = Object.assign([],todos)
      // ... פירוק המערך לגורמים והכנסה למערך
      const todoList= [...todos]
      todoList.push(todo)
      setTodos(todoList)
      setTodo("")
    }


    return (
      <div className="App">
  
        <Header myName={name}/>
        <TodoForm fillTodoList={fillTodoList}/>
        <List todos={todos}/>
      </div>
    );
  };
  
  export default App;
