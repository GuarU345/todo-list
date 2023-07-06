import { createTodo } from "./functions/api";

// eslint-disable-next-line react/prop-types
const Input = ({evt,evtTitle,title}) => {
  const handleChange = (event) => {
    evtTitle(event.target.value);
  };

  const handleKeyDown = async () => {
    if (event.key === "Enter") {
      const token = localStorage.getItem('token')
      const titleObj = {
        title: title,
      };
      await createTodo(titleObj,token);
      evtTitle("");
      await evt();
    }
  };

  return (
    <div>
      <input
        style={{ width: "100%" }}
        type="text"
        className="create-todo"
        placeholder="¿Que quieres hacer?"
        autoFocus
        value={title}
        onChange={handleChange}
        onKeyDownCapture={handleKeyDown}
      />
    </div>
  );
};

export default Input;
