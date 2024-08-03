const Form = () => {
  return (
    <div>
      <form className="form-container">
        <input
          className="task-input"
          placeholder="What are you planning to do?"
        />
        <button className="add-task-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
