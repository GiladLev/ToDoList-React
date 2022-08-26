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
        


        <iframe width="560" height="315" src="https://www.youtube.com/embed/MXtIpoh6w8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    );
  };
  
  export default App;
