import { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas y la tarea actual
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleAddOrEditTask = () => {
    if (currentTask.trim()) {
      if (editingIndex !== null) {
        // Editar tarea existente
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? currentTask : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null); // Limpiar el índice de edición
      } else {
        // Agregar nueva tarea
        setTasks([...tasks, currentTask]);
      }
      setCurrentTask(''); // Limpiar el input después de agregar o editar la tarea
    }
  };

  // envío del formulario (evitar el recargado de la página)
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddOrEditTask();
  };

  // edición de una tarea
  const handleEditTask = (index) => {
    setCurrentTask(tasks[index]);
    setEditingIndex(index);
  };

  // eliminación de una tarea
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleInputChange}
          placeholder={editingIndex !== null ? "Editar tarea" : "Agregar nueva tarea"}
        />
        <button type="submit">{editingIndex !== null ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Editar</button>
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
