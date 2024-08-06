import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ITodo } from "../interfaces/todo";

const Item = (props: ITodo) => {
  const { task, id } = props;

  return (
    <div className={`item-container incomplete`}>
      <div className="left-item-controls">
        <input type="checkbox" />
        <div>{task}</div>
      </div>
      <div className="right-item-controls">
        <button>
          <PencilSquareIcon className="edit-icon" />
        </button>
        <button>
          <TrashIcon className="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Item;
