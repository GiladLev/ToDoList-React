import { useState } from "react";

function TodoForm(props) {
    const [todo, setTodo]= useState("")


    return(
        <div>
            <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo}/>

            <button onClick={()=>props.fillTodoList(todo, setTodo)}>send</button>
        </div>
    )
}

export default TodoForm