import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoEditor } from "./hooks/useTodoEditor";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const {
    title,
    description,
    editingIndex,
    setTitle,
    setDescription,
    handleSubmit,
    startEdit,
    resetForm,
  } = useTodoEditor(tasks, setTasks);

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">ToDo List</h2>

      <TodoForm
        title={title}
        description={description}
        editingIndex={editingIndex}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />

      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          onComplete={toggleComplete}
          onEdit={startEdit}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
