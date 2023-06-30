import { createTodo } from "./functions/api";
import { credentials } from "./functions/apiUser";

// eslint-disable-next-line react/prop-types
const Input = ({evt,evtTitle,title}) => {
  const handleChange = (event) => {
    evtTitle(event.target.value);
  };

  const token = localStorage.getItem("token")

  const handleKeyDown = async () => {
    if (event.key === "Enter") {
      const body = {
        token: token,
      };
      const userData = await credentials(body);
      const titleObj = {
        title: title,
        user: userData._id,
      };
      await createTodo(titleObj);
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
