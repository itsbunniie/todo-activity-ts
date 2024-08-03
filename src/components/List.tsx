import Item from "./Item";

const List = () => {
  return (
    <div className="list-container">
      <div className="list-header">
        Your Tasks <div className="counter-list">0</div>
      </div>
      <Item />
      <div className="list-header">
        Completed Tasks <div className="counter-list">0</div>
      </div>
      <div className="empty-list-text">No tasks here!</div>
    </div>
  );
};

export default List;
