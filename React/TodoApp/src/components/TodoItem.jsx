function TodoItem({ task, index, onComplete, onEdit, onDelete }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 p-2 border">
      <div>
        <div className={task.completed ? "text-decoration-line-through opacity-50" : ""}>
          {task.title}
        </div>
        <small>{task.description}</small>
      </div>

      <div>
        <button
          className="btn btn-success btn-sm me-1"
          onClick={() => onComplete(index)}
        >
          <i className={`fa-solid ${task.completed ? "fa-rotate-left" : "fa-check"}`}></i>
        </button>

        <button
          className="btn btn-primary btn-sm me-1"
          onClick={() => onEdit(index)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(index)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
