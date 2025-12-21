import { useState } from "react";

export function useTodoEditor(tasks, setTasks) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = {
        ...updated[editingIndex],
        title,
        description,
      };
      setTasks(updated);
    } else {
      setTasks([...tasks, { title, description, completed: false }]);
    }

    resetForm();
  };

  const startEdit = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditingIndex(index);
  };

  return {
    title,
    description,
    editingIndex,
    setTitle,
    setDescription,
    handleSubmit,
    startEdit,
    resetForm,
  };
}
