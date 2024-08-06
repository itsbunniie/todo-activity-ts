import Item from "./Item";
import { useContext } from "react";
import { todoContext } from "../providers/todoContext";

const List = () => {
  const { todos } = useContext(todoContext);

  return (
    <div className="list-container">
      {/* list of uncompleted todos */}
      <div className="list-header">
        Your Tasks <div className="counter-list">0</div>
      </div>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}

      {/* list of uncompleted todos */}
      <div className="list-header">
        Completed Tasks <div className="counter-list">0</div>
      </div>
    </div>
  );
};

export default List;
