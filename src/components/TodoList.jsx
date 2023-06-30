import { deleteTodo,checkTodo } from "./functions/api";

// eslint-disable-next-line react/prop-types
const TodoList = ({filter, evt}) => {

    const deleteOneTodo = async (id) => {
        await deleteTodo(id);
      };

    const handleClick = async (event) => {
        event.preventDefault();
        const todoId = event.target.value;
        await deleteOneTodo(todoId);
        await evt()
      };

    const handleChangeCheck = async (event) => {
        const checked = event.target.checked;
    
        const todoId = event.target.value;
        const body = {
          completed: checked,
        };
        await checkTodo(todoId, body);
        await evt()

      };


  return (
    <div>
        {
          // eslint-disable-next-line react/prop-types
          filter.map((todo) => {
          return (
            <div key={todo._id} className="todo-item">
              <input
                className="check-todo"
                type="checkbox"
                onChange={handleChangeCheck}
                value={todo._id}
                checked={todo.completed}
              />
              <p>{todo.title}</p>
              <button
                className="btn btn-danger"
                onClick={handleClick}
                value={todo._id}
              >
                Eliminar
              </button>
            </div>
          );
        })}
    </div>
  )
}

export default TodoList