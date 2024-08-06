import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { todoContext } from "../providers/todoContext";

const Form = () => {
  const { dispatch } = useContext(todoContext);
  const [task, setTask] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { task } });
    setTask("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="task-input"
        placeholder="What are you planning to do?"
        onChange={handleInputChange}
        value={task}
      />
      <button className="add-task-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
