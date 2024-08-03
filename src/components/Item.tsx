import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const Item = () => {
  return (
    <div className="item-container incomplete">
      <div className="left-item-controls">
        <input type="checkbox" />
        <div>Task</div>
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
