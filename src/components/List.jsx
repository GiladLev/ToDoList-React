function List ({todos}) {
    return (
    <div className="todoList">
          <ul>
            {todos.map((todo, index)=> { return <li key={index}> {todo} </li> } )}
          </ul>
        </div>
    )
}

export default List