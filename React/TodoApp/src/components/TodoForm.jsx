function TodoForm({
  title,
  description,
  editingIndex,
  setTitle,
  setDescription,
  onSubmit,
  onCancel,
}) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="btn btn-primary">
        {editingIndex !== null ? "Update Task" : "Add Task"}
      </button>

      {editingIndex !== null && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onCancel}
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
}

export default TodoForm;
